export interface NewsReelItemI {
  id?: string;
  image: string;
  title: string;
  summary: string;
  body: string;
}

export interface UserI {
  uid: string;
  email: string;
  emailVerified?: boolean;
  displayName?: string;
  isAnonymous?: boolean;
  photoURL?: string;
  providerData: ProviderDataI[];
  stsTokenManager: StsTokenManagerI;
  createdAt: number;
  lastLoginAt: number;
  apiKey: string;
  appName: any;
}

export interface ProviderDataI {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: number | null;
  photoURL: string | null;
}

export interface StsTokenManagerI {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
