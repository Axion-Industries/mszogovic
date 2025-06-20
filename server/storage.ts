import { newsItems, assignments, users, type NewsItem, type Assignment, type User, type InsertUser, type InsertNewsItem, type InsertAssignment } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // News items
  getNewsItems(): Promise<NewsItem[]>;
  createNewsItem(item: InsertNewsItem): Promise<NewsItem>;
  
  // Assignments
  getAssignments(): Promise<Assignment[]>;
  createAssignment(assignment: InsertAssignment): Promise<Assignment>;
  
  // Stats
  getStats(): Promise<{
    activeAssignments: number;
    recentUpdates: number;
    classAverage: string;
  }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsItems: Map<number, NewsItem>;
  private assignments: Map<number, Assignment>;
  private currentUserId: number;
  private currentNewsId: number;
  private currentAssignmentId: number;

  constructor() {
    this.users = new Map();
    this.newsItems = new Map();
    this.assignments = new Map();
    this.currentUserId = 1;
    this.currentNewsId = 1;
    this.currentAssignmentId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private async initializeSampleData() {
    // Sample news items
    const sampleNews: InsertNewsItem[] = [
      {
        title: "Midterm Exam Schedule Released",
        content: "The midterm examination schedule has been posted. Please review the dates and prepare accordingly. Study guides will be available next week.",
        author: "Ms. Zogovic",
        priority: "high"
      },
      {
        title: "New Learning Resources Added",
        content: "I've uploaded additional practice problems for Chapter 5: Quadratic Functions. These resources include step-by-step solutions and video explanations.",
        author: "Ms. Zogovic", 
        priority: "normal"
      },
      {
        title: "Office Hours Update",
        content: "My office hours have been extended! I'm now available Monday-Thursday from 3:00-4:30 PM for extra help and questions.",
        author: "Ms. Zogovic",
        priority: "normal"
      }
    ];

    for (const news of sampleNews) {
      await this.createNewsItem(news);
    }

    // Sample assignments
    const sampleAssignments: InsertAssignment[] = [
      {
        title: "Quadratic Equations Worksheet",
        description: "Complete problems 1-20 on page 145. Show all work and include graphs where indicated.",
        dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
        points: 25,
        category: "homework",
        status: "active",
        isCompleted: false
      },
      {
        title: "Chapter 5 Quiz Preparation",
        description: "Review all concepts from Chapter 5 and complete the practice quiz available in the resources section.",
        dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
        points: 50,
        category: "quiz",
        status: "active",
        isCompleted: false
      },
      {
        title: "Graphing Calculator Project",
        description: "Create a presentation showing real-world applications of quadratic functions using graphing calculator demonstrations.",
        dueDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), // 8 days from now
        points: 100,
        category: "project",
        status: "active",
        isCompleted: false
      },
      {
        title: "Homework Set 4.3",
        description: "Practice problems covering polynomial division and remainder theorem.",
        dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        points: 20,
        category: "homework",
        status: "completed",
        isCompleted: true,
        grade: 18
      }
    ];

    for (const assignment of sampleAssignments) {
      await this.createAssignment(assignment);
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getNewsItems(): Promise<NewsItem[]> {
    return Array.from(this.newsItems.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createNewsItem(insertItem: InsertNewsItem): Promise<NewsItem> {
    const id = this.currentNewsId++;
    const item: NewsItem = {
      ...insertItem,
      id,
      createdAt: new Date(),
      priority: insertItem.priority || "normal"
    };
    this.newsItems.set(id, item);
    return item;
  }

  async getAssignments(): Promise<Assignment[]> {
    return Array.from(this.assignments.values()).sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );
  }

  async createAssignment(insertAssignment: InsertAssignment): Promise<Assignment> {
    const id = this.currentAssignmentId++;
    const assignment: Assignment = { 
      ...insertAssignment, 
      id,
      status: insertAssignment.status || "active",
      isCompleted: insertAssignment.isCompleted || false,
      grade: insertAssignment.grade || null
    };
    this.assignments.set(id, assignment);
    return assignment;
  }

  async getStats(): Promise<{
    activeAssignments: number;
    recentUpdates: number;
    classAverage: string;
  }> {
    const assignments = await this.getAssignments();
    const activeAssignments = assignments.filter(a => a.status === 'active').length;
    
    const newsItems = await this.getNewsItems();
    const recentUpdates = newsItems.length;

    return {
      activeAssignments,
      recentUpdates,
      classAverage: "92%"
    };
  }
}

export const storage = new MemStorage();
