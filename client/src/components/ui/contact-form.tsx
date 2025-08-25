import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertBookingRequestSchema, type InsertBookingRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<InsertBookingRequest>({
    resolver: zodResolver(insertBookingRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      package: "",
      preferredDate: "",
      message: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: (data: InsertBookingRequest) =>
      apiRequest("POST", "/api/booking-requests", data),
    onSuccess: () => {
      toast({
        title: "Booking Request Sent!",
        description: "Thank you for your booking request! We will contact you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBookingRequest) => {
    bookingMutation.mutate(data);
  };

  return (
    <div className="bg-cream-100 rounded-2xl p-8">
      <h3 className="text-2xl font-playfair font-bold text-cedar-600 mb-6">Send us a message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-cedar-600">First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      {...field}
                      data-testid="input-first-name"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fire-400 focus:border-transparent transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-cedar-600">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Doe"
                      {...field}
                      data-testid="input-last-name"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fire-400 focus:border-transparent transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-cedar-600">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                    data-testid="input-email"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fire-400 focus:border-transparent transition-all duration-200"
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
                <FormLabel className="text-sm font-semibold text-cedar-600">Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+27 12 345 6789"
                    {...field}
                    data-testid="input-phone"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fire-400 focus:border-transparent transition-all duration-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="package"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-cedar-600">Preferred Package</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-package" className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fire-400 focus:border-transparent transition-all duration-200">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Weekend Escape">Weekend Escape</SelectItem>
                    <SelectItem value="Weekly Retreat">Weekly Retreat</SelectItem>
                    <SelectItem value="Special Events">Special Events</SelectItem>
                    <SelectItem value="Custom Package">Custom Package</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-cedar-600">Preferred Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    data-testid="input-date"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fire-400 focus:border-transparent transition-all duration-200"
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
                <FormLabel className="text-sm font-semibold text-cedar-600">Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your event or any special requirements..."
                    {...field}
                    data-testid="textarea-message"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fire-400 focus:border-transparent transition-all duration-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-fire-500 hover:bg-fire-400 text-white py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            disabled={bookingMutation.isPending}
            data-testid="button-send-booking"
          >
            {bookingMutation.isPending ? "Sending..." : "Send Booking Request"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
