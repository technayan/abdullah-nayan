"use client";

import { CheckCircle2, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

/** Posts the form to /api/contact, which emails the message to you. */
export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-xl border bg-card p-5 sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your name
          </label>
          <Input
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Jane Doe"
            disabled={sending}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Your email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="jane@company.com"
            disabled={sending}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          placeholder="Tell me about the role or project..."
          disabled={sending}
        />
      </div>

      {/* Honeypot: hidden from people, filled in by bots */}
      <div
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? <LoaderCircle className="animate-spin" /> : <Send />}
          {sending ? "Sending..." : "Send message"}
        </Button>

        {status === "success" && (
          <p
            role="status"
            className="flex items-center gap-2 text-sm font-medium text-primary"
          >
            <CheckCircle2 className="size-4" /> Message sent. Thank you,
            I&apos;ll reply soon.
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="flex items-start gap-2 text-sm text-destructive"
          >
            <TriangleAlert className="mt-0.5 size-4 shrink-0" />
            <span>
              {error} You can also write to{" "}
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
