import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Chatbot = () => {
  useEffect(() => {
    // The createChat function will mount the chatbot to the target div
    const chat = createChat({
      webhookUrl: 'https://n8n.way2mca.com/webhook/854c829c-2ce6-426f-89e2-ed44d33182f3/chat',

      // Add custom title and messages
      i18n: {
        en: {
          title: 'AI Portfolio Assistant',
          subtitle: "Ask me anything about Mohammad's profile!",
          inputPlaceholder: 'Type your question here...',
        },
      },

      // Add some initial messages for a better user experience
      initialMessages: [
        'Hi there! 👋',
        "I'm an AI assistant. You can ask me questions about Mohammad's skills, experience, and projects.",
      ],
    });

    // The library handles its own cleanup, but if we wanted to be extra safe,
    // we could add a cleanup function here, though it's not documented in the library.
    // For now, we will rely on the library's internal management.

  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

  // This div is the default target for the chatbot to be embedded in.
  // The component itself doesn't render anything visible in the React tree,
  // as the library directly manipulates the DOM to add the chat widget.
  // We return a div with the default target ID to be explicit.
  return <div id="n8n-chat"></div>;
};

export default Chatbot;
