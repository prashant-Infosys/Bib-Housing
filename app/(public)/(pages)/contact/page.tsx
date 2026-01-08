"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Phone, MapPin, MessageSquare, ArrowRight, Building2, Globe, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { handleBookAppointment } from "@/lib/utils";
import { formSchema, FormSchemaType } from "@/lib/types";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      name: "", 
      email: "skprashant25@gmail.com", // Fixed Sender Email
      phone: "", 
      message: "" 
    },
  });

  async function onSubmit(values: FormSchemaType) {
  setIsSubmitting(true);
  try {
    const resp = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        phone: values.phone,
        message: values.message,
        email: "skprashant25@gmail.com", // Satisfies Zod but ignored by backend logic
      }),
    });

    const result = await resp.json();
    if (!result.success) throw new Error();

    form.reset();
    toast.success("Listing request sent!");
  } catch (err) {
    toast.error("Failed to send. Please try WhatsApp.");
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <section className="bg-slate-50 py-10 px-0">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-1 ">Get Started</h2>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Let’s get you <span className="text-primary">moving.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* CARD 1: BLUE THEME (OFFICE DETAILS) */}
          <Card className="border-none shadow-xl bg-white relative overflow-hidden transition-all hover:-translate-y-2 hover:scale-[1.05] border-l-4 border-blue-600">
            <CardHeader>
              <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-lg">
                <Globe className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Official Details</CardTitle>
              <CardDescription>Direct contact for business inquiries.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-slate-700 font-semibold text-sm">thebib97@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                  <p className="text-slate-700 font-semibold text-sm">+91 87084 97250</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Office</p>
                  <p className="text-slate-600 font-semibold text-sm leading-relaxed">
                    Indrapuri 9, Ratu Road Ranchi, Jharkhand
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CARD 2: WHATSAPP GREEN THEME */}
          <Card className="border-none shadow-2xl bg-[#25D366] text-white relative overflow-hidden transition-all hover:scale-[1.05] hover:-translate-y-2">
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <MessageSquare className="h-48 w-48" />
            </div>
            <CardHeader className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-white text-[#25D366] flex items-center justify-center mb-4 shadow-xl">
                <MessageSquare className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-bold">WhatsApp Chat</CardTitle>
              <CardDescription className="text-white/90">Instant response from our team.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col h-[340px] justify-between pb-6">
              <div className="space-y-4 pt-2 text-lg">
                {["Book Personal Assistance", "Schedule Site Tours", "Property Query"].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-white shrink-0" />
                    <span className="text-md font-medium">{text}</span>
                  </div>
                ))}
              </div>
              <Button 
                variant="secondary" 
                className="w-full h-14 font-black text-lg bg-white text-[#25D366] hover:bg-slate-100 shadow-xl"
                onClick={() => handleBookAppointment()}
              >
                Chat Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* CARD 3: ORANGE-600 THEME (SIMPLIFIED FORM) */}
          <Card className="border-none shadow-xl bg-white relative overflow-hidden transition-all hover:-translate-y-2 hover:scale-[1.05] border-l-4 border-orange-600">
            <CardHeader>
              <div className="h-14 w-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center mb-4 shadow-lg">
                <Building2 className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">List Property</CardTitle>
              <CardDescription>Just your name and number. We'll call you.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input className="h-12 border-slate-200 bg-slate-50 focus-visible:ring-orange-600" placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input className="h-12 border-slate-200 bg-slate-50 focus-visible:ring-orange-600" placeholder="Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            className="border-slate-200 bg-slate-50 resize-none h-28 focus-visible:ring-orange-600" 
                            placeholder="Briefly describe your property..." 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full h-14 font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-lg text-lg transition-all" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Submit Listing"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}