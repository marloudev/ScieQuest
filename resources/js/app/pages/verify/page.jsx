import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import { EmailOutlined, Instagram, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function VerifyPage({ status, auth }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <div>
            <div className="flex items-center justify-center flex-col mt-5">
                <section className="max-w-2xl mx-auto bg-white">
                    <header className="py-8 flex justify-center w-full">
                        <a href="#">
                            <img
                                src="/images/logo.png"
                                alt="tailwindtaplogo"
                                className="h-24"
                            />
                        </a>
                    </header>
                    <div className="h-[200px] bg-[#365CCE] w-full text-white flex items-center justify-center flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-[1px] bg-white"></div>
                            <EmailOutlined />
                            <div className="w-10 h-[1px] bg-white"></div>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <div className="text-center text-sm sm:text-xl tracking-widest font-normal">
                                THANKS FOR SIGNING UP!
                            </div>
                            <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize">
                                Verify your E-mail Address
                            </div>
                        </div>
                        
                    </div>
                    <main className="mt-8 sm:px-10">
                      
                        <div className="flex items-center justify-between">
                        <h2 className="text-gray-700 ">{auth.user.name}</h2>
                        <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="p-2 rounded-sm bg-blue-500 text-white"
                    >
                        Log Out
                    </Link>
                        </div>
                        <p className="mt-2 leading-loose text-gray-600 ">
                            Please use the following One Time Password(OTP)
                        </p>
              
                    </main>
                    <p className="text-gray-500  sm:px-10 mt-8">
                        <Button variant="contained" disabled={processing}>
                            Resend Verification Email
                        </Button>
                    </p>

                </section>
            </div>
        </div>
    );
}
