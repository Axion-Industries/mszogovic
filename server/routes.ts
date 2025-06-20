import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get dashboard stats
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });

  // Get news items
  app.get("/api/news", async (req, res) => {
    try {
      const newsItems = await storage.getNewsItems();
      res.json(newsItems);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ message: "Failed to fetch news items" });
    }
  });

  // Get assignments
  app.get("/api/assignments", async (req, res) => {
    try {
      const assignments = await storage.getAssignments();
      res.json(assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      res.status(500).json({ message: "Failed to fetch assignments" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
