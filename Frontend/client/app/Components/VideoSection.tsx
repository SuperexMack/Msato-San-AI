import HeroVideoDialog from "@/components/magicui/hero-video-dialog";


export function HeroVideoDialogDemo() {
  return (
    <div className="relative rounded-2xl">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/95W5a-uH8qc?si=-_2YnOzwQA9AElP"
        thumbnailSrc= "/videoImage.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/95W5a-uH8qc?si=-_2YnOzwQA9AElP"
        thumbnailSrc= "/videoImage.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
