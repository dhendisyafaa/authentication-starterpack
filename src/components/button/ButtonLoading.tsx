import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface ButtonLoadingProps extends ButtonProps {
  loading: boolean;
}

export default function ButtonLoading({
  loading,
  disabled,
  className,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {loading && <Loader2 className="size-5 animate-spin" />}
      {props.children}
    </Button>
  );
}
