export const FB_PIXEL_ID = "1180077463699646"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type FbqEventName =
  | "Lead"
  | "CompleteRegistration"
  | "Purchase"
  | "ViewContent"
  | "InitiateCheckout"
  | (string & {})

export function fbqEvent(eventName: FbqEventName, eventParams?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  if (!window.fbq) return

  if (eventParams) {
    window.fbq("track", eventName, eventParams)
  } else {
    window.fbq("track", eventName)
  }
}


