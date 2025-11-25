"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, Phone, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import { handleBookAppointment } from "@/lib/utils";
import { ContactType, formSchema, FormSchemaType } from "@/lib/types";




export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: '',
      message: "",
    },
  });

  async function onSubmit(values: FormSchemaType) {
    setIsSubmitting(true);

    const payload: ContactType = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await resp.json();

      if (!result?.success) {
        throw new Error(result?.error || "Failed to send message");
      }

      form.reset();
      toast.success("Message sent — we’ll get back to you soon.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <BreadcrumbBanner
        title="Contact Us"
        description="Help us route your inquiry"
        items={[{ label: "Contact", href: "/contact" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="h-3 border-x mb-6 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Form (spans 7/12 on large) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Let’s get you to the right place
                </CardTitle>
                <CardDescription className="mt-1">
                  Questions? Want personalised property assistance? We’re here
                  to help.
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                            />
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
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                            />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="I have to Sell, Rent, Buy...."
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="flex-1"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        className="flex-1"
                        type="button"
                        onClick={() => (window.location.href = "/properties")}
                      >
                        Browse Properties
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Illustration + Contact Details (spans 5/12 on large) */}
          <aside className="lg:col-span-5 flex flex-col gap-6">
            {/* Contact details card */}
            <Card className="px-4 py-10">
              <CardHeader>
                <CardTitle className="text-lg">Get in touch</CardTitle>
                <CardDescription className="mt-1">
                  Prefer to call or email? Reach out to us directly.
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a
                      className="font-medium text-foreground"
                      href="mailto:hello@bibhousing.com"
                    >
                      hello@bibhousing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Phone (WhatsApp)
                    </div>
                    <a
                      className="font-medium text-foreground"
                      href="tel:+919900001122"
                    >
                      +91 99000 01122
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Office</div>
                    <div className="font-medium text-foreground">
                      Bib Housing — HQ
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Gopalan Florenza, Banashankari Stage 6, Bangalore 560050
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Hours</div>
                    <div className="font-medium text-foreground">
                      Mon — Sat: 09:30 — 18:30
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Sun: Closed
                    </div>
                  </div>
                </div>

                <div>
                  <Button
                    className="w-full"
                    onClick={() => handleBookAppointment()}
                  >
                    Message us on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
}
