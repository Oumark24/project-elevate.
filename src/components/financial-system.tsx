"use client";

import {
  GraduationCap,
  HandHeart,
  PiggyBank,
  UserRound,
} from "lucide-react";
import { ChangeEvent, useMemo, useState } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const allocations = [
  {
    key: "savings",
    label: "Savings",
    icon: PiggyBank,
  },
  {
    key: "education",
    label: "Education / Coding",
    icon: GraduationCap,
  },
  {
    key: "personal",
    label: "Personal",
    icon: UserRound,
  },
  {
    key: "giving",
    label: "Giving",
    icon: HandHeart,
  },
] as const;

type AllocationKey = (typeof allocations)[number]["key"];
type AllocationValues = Record<AllocationKey, string>;

const initialAllocations: AllocationValues = {
  savings: "40",
  education: "25",
  personal: "25",
  giving: "10",
};

function clampPercentage(value: string) {
  if (value === "") {
    return "";
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return "0";
  }

  return String(Math.min(100, Math.max(0, parsed)));
}

function parseAmount(value: string) {
  if (value === "") {
    return 0;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return 0;
  }

  return Math.max(0, parsed);
}

export function FinancialSystem() {
  const [allowance, setAllowance] = useState("120");
  const [values, setValues] = useState(initialAllocations);

  const summary = useMemo(() => {
    const monthlyAllowance = parseAmount(allowance);
    const percentages = allocations.map(({ key }) => ({
      key,
      percentage: parseAmount(values[key]),
    }));
    const percentageTotal = percentages.reduce(
      (total, { percentage }) => total + percentage,
      0,
    );
    const categories = percentages.map(({ key, percentage }) => ({
      key,
      percentage,
      amount: monthlyAllowance * (percentage / 100),
    }));

    return {
      monthlyAllowance,
      percentageTotal,
      categories,
      allocated: categories.reduce((total, category) => total + category.amount, 0),
    };
  }, [allowance, values]);

  const remainder = 100 - summary.percentageTotal;
  const hasMismatch = Math.abs(remainder) > 0.000001;

  function handleAllowanceChange(event: ChangeEvent<HTMLInputElement>) {
    const rawValue = event.target.value;

    if (rawValue === "") {
      setAllowance("");
      return;
    }

    const parsed = Number(rawValue);
    setAllowance(
      Number.isFinite(parsed) ? String(Math.max(0, parsed)) : "0",
    );
  }

  function handleAllocationChange(
    key: AllocationKey,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setValues((current) => ({
      ...current,
      [key]: clampPercentage(event.target.value),
    }));
  }

  function formatPercentage(value: number) {
    return Number.isInteger(value) ? String(value) : value.toFixed(2);
  }

  return (
    <section
      id="finances"
      className="scroll-mt-16 px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Financial System
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Give every dollar a job.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m practicing financial responsibility by deciding where
            money goes before it arrives, then checking whether my choices
            match the plan.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="rounded-lg border border-border bg-muted/20 p-5 sm:p-8">
            <h3 className="text-xl font-medium text-foreground">
              Monthly plan
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Percentages are clamped to 0–100% per category and remain
              independent, so the running total stays visible.
            </p>

            <div className="mt-8">
              <label
                htmlFor="monthly-allowance"
                className="text-sm font-medium text-foreground"
              >
                Monthly allowance
              </label>
              <div className="relative mt-2">
                <span
                  className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground"
                  aria-hidden="true"
                >
                  $
                </span>
                <input
                  id="monthly-allowance"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  value={allowance}
                  onChange={handleAllowanceChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-3 pl-8 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 motion-reduce:transition-none"
                  placeholder="120.00"
                />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {allocations.map(({ key, label }) => (
                <div key={key}>
                  <label
                    htmlFor={`allocation-${key}`}
                    className="flex items-center justify-between text-sm font-medium text-foreground"
                  >
                    <span>{label}</span>
                    <span className="text-muted-foreground">
                      {formatPercentage(parseAmount(values[key]))}%
                    </span>
                  </label>
                  <div className="relative mt-2">
                    <input
                      id={`allocation-${key}`}
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      inputMode="decimal"
                      value={values[key]}
                      onChange={(event) => handleAllocationChange(key, event)}
                      className="w-full rounded-md border border-border bg-background px-3 py-2.5 pr-8 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 motion-reduce:transition-none"
                      aria-describedby="allocation-guidance"
                    />
                    <span
                      className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground"
                      aria-hidden="true"
                    >
                      %
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p
              id="allocation-guidance"
              className="mt-6 text-xs leading-5 text-muted-foreground"
            >
              Empty percentages count as 0%. Negative and non-finite entries
              are clamped to 0%; values above 100% are clamped to 100%.
            </p>
          </div>

          <div className="rounded-lg border border-primary/30 bg-primary/[0.04] p-5 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Allocation summary
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Based on {currency.format(summary.monthlyAllowance)} per
                  month
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Allocated
                </p>
                <p className="mt-1 text-3xl font-medium tabular-nums text-foreground">
                  {currency.format(summary.allocated)}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {summary.categories.map(({ key, percentage, amount }) => {
                const category = allocations.find((item) => item.key === key);
                const Icon = category?.icon ?? PiggyBank;

                return (
                  <div key={key}>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <Icon
                          className="size-5 shrink-0 text-primary"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span className="truncate text-sm font-medium text-foreground">
                          {category?.label}
                        </span>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="block text-xl font-medium tabular-nums text-foreground">
                          {currency.format(amount)}
                        </span>
                        <span className="text-xs tabular-nums text-muted-foreground">
                          {formatPercentage(percentage)}%
                        </span>
                      </div>
                    </div>
                    <div
                      className="mt-3 h-2 overflow-hidden rounded-full bg-background"
                      aria-hidden="true"
                    >
                      <div
                        className="h-full rounded-full bg-primary transition-[width] duration-200 motion-reduce:transition-none"
                        style={{ width: `${Math.min(100, percentage)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-muted-foreground">
                  Percentage total
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  {formatPercentage(summary.percentageTotal)}%
                </span>
              </div>
              <p
                className={`mt-3 text-sm leading-6 ${
                  hasMismatch ? "text-amber-300" : "text-emerald-300"
                }`}
                role="status"
                aria-live="polite"
              >
                {hasMismatch
                  ? remainder > 0
                    ? `${formatPercentage(remainder)}% remains unallocated.`
                    : `${formatPercentage(Math.abs(remainder))}% is over-allocated.`
                  : "Plan is fully allocated."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
