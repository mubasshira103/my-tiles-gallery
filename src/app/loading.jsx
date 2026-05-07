"use client";

import { Button, Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button isPending>
        {({ isPending }) => (
          <>
            {isPending && <Spinner color="current" size="sm" />}
            Uploading...
          </>
        )}
      </Button>
    </div>
  );
}
