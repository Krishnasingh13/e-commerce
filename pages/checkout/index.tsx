import InputField from "@/components/InputField";
import { RootState } from "@/store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { z } from "zod";

const checkoutSchema = z.object({
  name: z.string().min(1, { message: "Full Name is required" }),
  cardNum: z.string().length(16, { message: "Card number must be 16 digits" }),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, {
    message: "Expiration date must be in MM/YY format",
  }),
  cvc: z
    .string()
    .min(3, { message: "CVC must be at least 3 digits" })
    .max(4, { message: "CVC must be at most 4 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  region: z.string().min(1, { message: "State/Province is required" }),
});

type FormData = z.infer<typeof checkoutSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const Index = () => {
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/cart"); 
    }
  }, [cartItems, router]);
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cardNum: "",
    expirationDate: "",
    cvc: "",
    address: "",
    city: "",
    region: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "cardNum" || name === "expirationDate" || name === "cvc") {
      const numericValue = value.replace(/\D/g, "");

      if (name === "cardNum" && numericValue.length <= 16) {
        setFormData({ ...formData, [name]: numericValue });
      } else if (name === "expirationDate") {
        let formattedValue = numericValue;
        if (numericValue.length > 2) {
          formattedValue = `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`;
        }
        setFormData({ ...formData, [name]: formattedValue });
      } else if (name === "cvc" && numericValue.length <= 4) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = checkoutSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors = result.error.flatten().fieldErrors;
      setErrors(formattedErrors as FormErrors);
    } else {
      toast.success("Successfully order is placed!");
      router.push("/");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden rounded-xl shadow">
          <div className="grid grid-cols-1">
            <div className="px-2 py-6 text-gray-900 md:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Checkout
              </h1>
              <div className="divide-y divide-gray-200">
                <div className="py-3">
                  <div className="px-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Contact information
                      </h3>
                      <div className="mt-1 w-full">
                        <InputField
                          label="Full Name"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          error={errors.name}
                        />
                      </div>
                    </div>
                    <hr className="mb-4 mt-8" />
                    <div className="">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Payment details
                      </h3>
                      <div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                        <div className="col-span-3 sm:col-span-4">
                          <InputField
                            label="Card number"
                            name="cardNum"
                            placeholder="4242 4242 4242 4242"
                            value={formData.cardNum}
                            onChange={handleChange}
                            error={errors.cardNum}
                            inputMode="numeric"
                            pattern="\d{16}"
                          />
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                          <InputField
                            label="Expiration date (MM/YY)"
                            name="expirationDate"
                            placeholder="MM/YY"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            error={errors.expirationDate}
                            inputMode="numeric"
                            pattern="\d{2}/\d{2}"
                          />
                        </div>
                        <div>
                          <InputField
                            label="CVC"
                            name="cvc"
                            placeholder="Enter Your CVC Number"
                            value={formData.cvc}
                            onChange={handleChange}
                            error={errors.cvc}
                            inputMode="numeric"
                            pattern="\d{3,4}"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="mb-4 mt-8" />
                    <div className="">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Shipping address
                      </h3>
                      <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <InputField
                            label="Address"
                            name="address"
                            placeholder="Enter Your Address"
                            value={formData.address}
                            onChange={handleChange}
                            error={errors.address}
                          />
                        </div>
                        <div>
                          <InputField
                            label="City"
                            name="city"
                            placeholder="Enter Your City"
                            value={formData.city}
                            onChange={handleChange}
                            error={errors.city}
                          />
                        </div>
                        <div>
                          <InputField
                            label="State / Province"
                            name="region"
                            placeholder="Enter Your State"
                            value={formData.region}
                            onChange={handleChange}
                            error={errors.region}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                      <button
                        type="submit"
                        className="mt-1 w-fit rounded-md border bg-black px-4 py-1.5 text-sm font-semibold text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
                      >
                        Make payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
