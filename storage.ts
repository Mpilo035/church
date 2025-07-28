import { 
  users, newsletters, contacts, events,
  type User, type InsertUser,
  type Newsletter, type InsertNewsletter,
  type Contact, type InsertContact,
  type Event, type InsertEvent
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  createEvent(event: InsertEvent): Promise<Event>;
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsletters: Map<number, Newsletter>;
  private contacts: Map<number, Contact>;
  private events: Map<number, Event>;
  private currentUserId: number;
  private currentNewsletterId: number;
  private currentContactId: number;
  private currentEventId: number;

  constructor() {
    this.users = new Map();
    this.newsletters = new Map();
    this.contacts = new Map();
    this.events = new Map();
    this.currentUserId = 1;
    this.currentNewsletterId = 1;
    this.currentContactId = 1;
    this.currentEventId = 1;

    // Initialize with some default events
    this.initializeEvents();
  }

  private initializeEvents() {
    const defaultEvents = [
      {
        title: "Easter Sunday Celebration",
        description: "Join us for a special Easter service celebrating the resurrection of our Lord Jesus Christ. Special music, baptisms, and fellowship lunch to follow.",
        dateTime: "April 9, 2024 at 9:00 AM"
      },
      {
        title: "Community Food Drive",
        description: "Help us serve our local community by donating non-perishable food items. Drop-off times available throughout the weekend.",
        dateTime: "March 25-27, 2024"
      },
      {
        title: "Marriage Enrichment Weekend",
        description: "A special weekend retreat designed to strengthen marriages through biblical principles, communication workshops, and quality time together.",
        dateTime: "April 15-16, 2024"
      }
    ];

    defaultEvents.forEach(event => {
      const id = this.currentEventId++;
      const eventWithTimestamp: Event = {
        ...event,
        id,
        createdAt: new Date()
      };
      this.events.set(id, eventWithTimestamp);
    });
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

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      subscribedAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email,
    );
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { 
      ...insertEvent, 
      id,
      createdAt: new Date()
    };
    this.events.set(id, event);
    return event;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }
}

export const storage = new MemStorage();
