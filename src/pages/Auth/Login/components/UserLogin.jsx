import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/utils/utils";

const UserLogin = ({ schema, defaultValues }) => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <Card className="w-full md:max-w-sm">
      <CardHeader className="py-4">
        <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
          Login As User
        </CardTitle>
        <CardDescription>Login to view your certificates.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={cn("relative")}>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Button variant="link" type="button">
                      <span className="text-sm bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold hover:underline decoration-indigo-600">
                        Forgot your password?
                      </span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <FormControl>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        value={field.value}
                      />
                    </FormControl>
                    {showPassword ? (
                      <Button
                        variant="outline"
                        size="icon"
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <EyeOpenIcon />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="icon"
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <EyeClosedIcon />
                      </Button>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="px-8 py-3 text-base rounded dark:bg-indigo-600/30 dark:border-indigo-800/40 border-indigo-800/40 border-2 dark:text-gray-50 text-indigo-600 dark:hover:bg-indigo-600/60 transition-colors duration-300 w-full bg-transparent hover:bg-transparent"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserLogin;
