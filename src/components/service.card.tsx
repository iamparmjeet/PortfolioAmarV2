import { IconBrandInstagram, IconBulbFilled, IconCamera, IconEdit, IconMicrophone, IconVideo } from "@tabler/icons-react";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "video-camera":
        return <IconVideo className="w-10 h-10 text-gold-400" />;
      case "edit":
        return <IconEdit className="w-10 h-10 text-gold-400" />;
      case "podcast":
        return <IconMicrophone className="w-10 h-10 text-gold-400" />;
      case "instagram":
        return <IconBrandInstagram className="w-10 h-10 text-gold-400" />;
      case "camera":
        return <IconCamera className="w-10 h-10 text-gold-400" />;
      case "lightbulb":
        return <IconBulbFilled className="w-10 h-10 text-gold-400" />;
      default:
        return <IconVideo className="w-10 h-10 text-gold-400" />;
    }
  };

  return (
    <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-gold-500/50 transition-colors group">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gold-400 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
