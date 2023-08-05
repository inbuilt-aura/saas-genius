"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("22d05fa4-6989-4403-af06-002a779f7309");
  }, []);

  return null;
};
