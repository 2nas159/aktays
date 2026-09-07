"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useId, useState } from "react";
import type { PagesContent } from "@/content/pages";
import type { Locale } from "@/i18n/config";

type Form = PagesContent["contact"]["form"];
type Status = "idle" | "sending" | "success" | "error" | "not_configured";
type FieldKey = "name" | "email" | "message";

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-ink outline-none transition-colors duration-300 placeholder:text-muted/60 focus:border-accent";

export default function ContactForm({
  form,
  locale,
  email,
}: {
  form: Form;
  locale: Locale;
  email: string;
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  const messageFor = (field: FieldKey, code: string) => {
    if (code === "email") return form.emailError;
    if (code === "tooShort") return form.messageError;
    return form.requiredError;
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setStatus("sending");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          companyName: data.get("companyName"),
          projectType: data.get("projectType"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          message: data.get("message"),
          website: data.get("website"),
          locale,
        }),
      });

      const result = (await response.json()) as {
        ok: boolean;
        code?: string;
        fieldErrors?: Record<string, string>;
      };

      if (result.ok) {
        setStatus("success");
        return;
      }

      if (result.code === "validation" && result.fieldErrors) {
        const next: Partial<Record<FieldKey, string>> = {};
        for (const [field, code] of Object.entries(result.fieldErrors)) {
          next[field as FieldKey] = messageFor(field as FieldKey, code);
        }
        setErrors(next);
        setStatus("idle");
        return;
      }

      setStatus(result.code === "not_configured" ? "not_configured" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-accent pt-8"
      >
        <h3 className="font-display text-h3 text-accent">{form.successTitle}</h3>
        <p className="mt-4 max-w-md text-lead text-ink-soft">{form.successBody}</p>
        <a href={`mailto:${email}`} className="link-underline label mt-6 inline-block text-ink">
          {email}
        </a>
      </motion.div>
    );
  }

  const selectClass = `${fieldClass} appearance-none cursor-pointer`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
      <fieldset className="contents">
        <legend className="sr-only">{form.legend}</legend>

        <div className="grid gap-8 sm:grid-cols-2">
          <Field
            id={`${id}-name`}
            name="name"
            label={form.name.label}
            placeholder={form.name.placeholder}
            error={errors.name}
            required
          />
          <Field
            id={`${id}-email`}
            name="email"
            type="email"
            label={form.email.label}
            placeholder={form.email.placeholder}
            error={errors.email}
            required
          />
        </div>

        <Field
          id={`${id}-company`}
          name="companyName"
          label={form.company.label}
          placeholder={form.company.placeholder}
          optionalLabel={form.optional}
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {(
            [
              ["projectType", form.projectType],
              ["budget", form.budget],
              ["timeline", form.timeline],
            ] as const
          ).map(([name, field]) => (
            <div key={name}>
              <label htmlFor={`${id}-${name}`} className="label text-muted">
                {field.label}
              </label>
              <select
                id={`${id}-${name}`}
                name={name}
                defaultValue=""
                className={selectClass}
              >
                <option value="" disabled>
                  {form.selectPlaceholder}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div>
          <label htmlFor={`${id}-message`} className="label text-muted">
            {form.message.label}
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={6}
            required
            placeholder={form.message.placeholder}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${id}-message-error` : undefined}
            className={`${fieldClass} resize-y`}
          />
          {errors.message ? (
            <p id={`${id}-message-error`} className="label mt-3 text-accent">
              {errors.message}
            </p>
          ) : null}
        </div>

        {/* Honeypot. Hidden from people, left in the DOM for bots to fill. */}
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={`${id}-website`}>Website</label>
          <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </fieldset>

      <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          {form.consentBefore}
          <Link href={`/${locale}/legal/privacy`} className="link-underline text-ink">
            {form.consentLink}
          </Link>
          {form.consentAfter}
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          data-cursor="true"
          className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-ink px-8 py-5 text-canvas transition-colors duration-500 hover:bg-accent disabled:opacity-60"
        >
          <span className="label">{status === "sending" ? form.sending : form.submit}</span>
          <span
            aria-hidden
            className="flip-rtl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>

      <AnimatePresence>
        {status === "error" || status === "not_configured" ? (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border-s-2 border-accent bg-paper p-6"
          >
            <p className="font-display text-h3">
              {status === "not_configured" ? form.notConfiguredTitle : form.errorTitle}
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              {status === "not_configured" ? form.notConfiguredBody : form.errorBody}
            </p>
            <a href={`mailto:${email}`} className="link-underline label mt-4 inline-block text-ink">
              {email}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  error,
  required,
  optionalLabel,
}: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
  required?: boolean;
  optionalLabel?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label flex items-center gap-2 text-muted">
        {label}
        {optionalLabel ? <span className="opacity-60">({optionalLabel})</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={`${id}-error`} className="label mt-3 text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
