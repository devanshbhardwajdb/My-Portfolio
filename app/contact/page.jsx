"use client"
import React, { useState } from 'react'
import Form from '@components/Form'
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();



  const [formData, setFormData] = useState({ name: "", phone: "",email:"",message:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
         
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } 
    
  };

  return (
    <Form
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  )
}


export default Contact;
