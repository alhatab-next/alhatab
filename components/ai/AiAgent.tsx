"use client";

import { useEffect } from "react";

const AiAgent = ({ agentId }: { agentId?: string }) => {
  useEffect(() => {
    if (!agentId) return;

    const removeFooter = () => {
      // 1. Find the ConvAI widget
      const convaiElement = document.querySelector("elevenlabs-convai");

      if (!convaiElement?.shadowRoot) return;

      // 2. Check for the footer inside Shadow DOM
      const interval = setInterval(() => {
        const shadowRoot = convaiElement.shadowRoot;
        const footer = shadowRoot?.querySelector(
          'p[class*="whitespace-nowrap"]'
        );

        if (footer) {
          footer.remove();
          clearInterval(interval);
        }
      }, 100); // Check every 100ms until found

      return () => clearInterval(interval);
    };

    // 3. Run after widget loads
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.onload = removeFooter;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [agentId]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>`,
      }}
    />
  );
};

export default AiAgent;
