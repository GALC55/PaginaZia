import { useMutation } from "@tanstack/react-query";
import { createAppointmentRequest, type AppointmentRequest, type AppointmentRequestInput } from "./api";

export const appointmentKeys = {
  all: ["appointments"] as const,
  requests: () => [...appointmentKeys.all, "requests"] as const
};

export function useCreateAppointmentRequest() {
  return useMutation<AppointmentRequest, Error, AppointmentRequestInput>({
    mutationFn: createAppointmentRequest
  });
}
