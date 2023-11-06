export type User = {
  user_id?: number;
  account_id?: number;
  name?: string;
  email?: string;
  role?: string;
  ip_address?: string;
  is_email_verified?: boolean;
  is_email_subscribed?: boolean;
  guid?: string;
  last_login_at?: Date;
  status?: String;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
};
