export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      hats_info: {
        Row: {
          created_at: string | null;
          id: number;
          ImageSrc: string | null;
          Price: string | null;
          Title: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          ImageSrc?: string | null;
          Price?: string | null;
          Title?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          ImageSrc?: string | null;
          Price?: string | null;
          Title?: string | null;
        };
      };
      hats_info2: {
        Row: {
          created_at: string | null;
          id: number;
          ImageSrc: string | null;
          Price: string | null;
          Title: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          ImageSrc?: string | null;
          Price?: string | null;
          Title?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          ImageSrc?: string | null;
          Price?: string | null;
          Title?: string | null;
        };
      };
      hats_info3: {
        Row: {
          created_at: string | null;
          id: number;
          ImageSrc: string | null;
          Price: string | null;
          Title: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          ImageSrc?: string | null;
          Price?: string | null;
          Title?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          ImageSrc?: string | null;
          Price?: string | null;
          Title?: string | null;
        };
      };
      profiles: {
        Row: {
          id: number;
          username: string | null;
        };
        Insert: {
          id?: number;
          username?: string | null;
        };
        Update: {
          id?: number;
          username?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
