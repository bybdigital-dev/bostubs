import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // API route for booking requests
  app.post("/api/booking-requests", async (req, res) => {
    try {
      const bookingData = insertBookingRequestSchema.parse(req.body);
      const bookingRequest = await storage.createBookingRequest(bookingData);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log the booking request
      console.log("New booking request:", bookingRequest);
      
      res.status(201).json({ 
        message: "Booking request submitted successfully", 
        id: bookingRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // API route to get all booking requests (for admin purposes)
  app.get("/api/booking-requests", async (req, res) => {
    try {
      const bookingRequests = await storage.getBookingRequests();
      res.json(bookingRequests);
    } catch (error) {
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
