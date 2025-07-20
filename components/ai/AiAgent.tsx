"use client";

const AiAgent = ({ agentId }: { agentId?: string }) => {
  if (!agentId) return null;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>
                 <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async></script>`,
      }}
    />
  );
};

export default AiAgent;
