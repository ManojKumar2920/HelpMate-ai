

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

import { ChatBubbleIcon, GlobeIcon, CalendarIcon, BellIcon } from "@radix-ui/react-icons";
import { SearchIcon } from "lucide-react";

const features = [
  {
    Icon: ChatBubbleIcon,  // Icon representing customer support
    name: "24/7 Customer Support",
    description: "HelpMate.ai provides round-the-clock support, ensuring customers get help anytime, day or night.",
    href: "mailto:manojkumararumainathan@gmail.com",
    cta: "Learn more",
    background: <img src="../../public/Waiting.png" className="absolute -right-20 -top-20 opacity-60" alt="24/7 Support" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: SearchIcon,  // Icon representing full-text search functionality
    name: "Handling High Volume Inquiries",
    description: "Manage peak times effortlessly with HelpMate.ai, handling a high volume of inquiries without missing a beat.",
    href: "mailto:manojkumararumainathan@gmail.com",
    cta: "Learn more",
    background: <img src="/path/to/high-volume-inquiries-image.jpg" className="absolute -right-20 -top-20 opacity-60" alt="High Volume Inquiries" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,  // Icon representing multilingual support
    name: "Multilingual Support",
    description: "Interact with customers in their preferred language with HelpMate.ai’s support for 100+ languages.",
    href: "mailto:manojkumararumainathan@gmail.com",
    cta: "Learn more",
    background: <img src="/path/to/multilingual-support-image.jpg" className="absolute -right-20 -top-20 opacity-60" alt="Multilingual Support" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,  // Icon representing calendar functionality
    name: "Order Tracking and Updates",
    description: "HelpMate.ai provides real-time updates on order statuses, keeping customers informed effortlessly.",
    href: "mailto:manojkumararumainathan@gmail.com",
    cta: "Learn more",
    background: <img src="/path/to/order-tracking-image.jpg" className="absolute -right-20 -top-20 opacity-60" alt="Order Tracking" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,  // Icon representing notifications
    name: "Personalized Recommendations",
    description: "Enhance customer experience with personalized product recommendations based on their interactions with HelpMate.ai.",
    href: "mailto:manojkumararumainathan@gmail.com",
    cta: "Learn more",
    background: <img src="/path/to/personalized-recommendations-image.jpg" className="absolute -right-20 -top-20 opacity-60" alt="Personalized Recommendations" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function UseCases() {
  return (
    <div>
      <div id="use-cases" className=" text-center pt-10">
        <h1 className=" text-3xl font-bold">Use Cases</h1>
        <p className=" text-sm py-2">
          HelpMate leverages cutting-edge AI to engage with customers
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3 p-10 justify-center">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
