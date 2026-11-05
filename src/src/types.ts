export type EventStatus =
  | 'pending'
  | 'confirmed'
  | 'modified'
  | 'cancelled'
  | 'sold_out'
  | 'finished';

export interface Venue {
  id: string;
  name: string;
  slug: string;
  address?: string;
  instagram?: string;
  website?: string;
  image_url?: string;
}

export interface Artist {
  id: string;
  name: string;
  slug: string;
  bio?: string;
  genres: string[];
  instagram?: string;
  soundcloud?: string;
  spotify?: string;
  image_url?: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description?: string;
  date: string;
  doors_time?: string;
  venue_id: string;
  venue?: Venue;
  artist_ids: string[];
  artists?: Artist[];
  genres: string[];
  price_min?: number;
  price_max?: number;
  currency: 'COP';
  ticket_url?: string;
  flyer_url?: string;
  promoter?: string;
  status: EventStatus;
  source_url?: string;
  source_type?: 'instagram' | 'website' | 'ticketing' | 'manual';
  verified_at?: string;
  created_at: string;
  updated_at: string;
}

export interface EventFilters {
  date?: 'today' | 'tomorrow' | 'week' | 'weekend' | '15days' | '30days';
  venue?: string;
  artist?: string;
  genre?: string;
  free_only?: boolean;
  open_air?: boolean;
  club_events?: boolean;
}
