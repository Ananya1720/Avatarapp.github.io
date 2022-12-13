import React from "react";
export default function useForwardedRef<T>(forwardedRef: React.Ref<T>): React.MutableRefObject<T>;
