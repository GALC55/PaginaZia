import { apiFetch } from "@/lib/api";

export type AppointmentRequestInput = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  treatment: string;
  message: string;
  source?: string;
  website?: string;
};

export type AppointmentRequest = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  treatment: string;
  message: string;
  status: "new" | "contacted" | "scheduled" | "discarded";
  source: string;
  created_at: string;
};

export async function createAppointmentRequest(
  input: AppointmentRequestInput
): Promise<AppointmentRequest> {
  return apiFetch<AppointmentRequest>("/appointments/request", {
    method: "POST",
    body: JSON.stringify({ source: "web", ...input })
  });
}
