import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Chatbot = () => {
  useEffect(() => {
    const chat = createChat({
      webhookUrl: 'https://n8n.way2mca.com/webhook/854c829c-2ce6-426f-89e2-ed44d33182f3/chat',
      i18n: {
        en: {
          title: 'AI Portfolio Assistant',
          subtitle: "Ask me anything about Mohammad's profile!",
          inputPlaceholder: 'Type your question here...',
        },
      },
      initialMessages: [
        'Hi there! 👋',
        "I'm an AI assistant. You can ask me questions about Mohammad's skills, experience, and projects.",
      ],
    });
  }, []);

  return (
    <>
      <style>
        {`
          /*
            After further research, the @n8n/chat library does not support adding custom icons
            to the chat toggle button. The button's content is encapsulated.
            As an alternative, I am styling the button to be a more prominent
            Floating Action Button (FAB) in the bottom-right corner.
          */

          :root {
            /* Fix for invisible typing text */
            --chat--textarea--background: #ffffff;
            --chat--textarea--color: #101330;

            /* Custom branding and button styling */
            --chat--color-primary: #0d6efd; /* Bootstrap primary blue */
            --chat--message--user--background: #0d6efd;
            --chat--toggle--background: var(--chat--color-primary);
            --chat--toggle--size: 60px;
          }

          /* Positioning the chat widget container as a FAB */
          #n8n-chat {
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 1000;
          }
        `}
      </style>
      <div id="n8n-chat"></div>
    </>
  );
};

export default Chatbot;
