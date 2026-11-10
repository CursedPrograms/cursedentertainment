/*
 * catalog.js - everything the Games, Tools and Stories pages show.
 *
 * ADDING A THING = ADDING ONE ENTRY to the right section's "items" list. Two kinds:
 *
 *   itch.io embed (the classic widget):
 *     { itch: "1593914", title: "Araknia", url: "https://cursed-entertainment.itch.io/araknia" }
 *     (the number is the itch.io embed id; optional "links" add buttons under the widget)
 *
 *   normal card:
 *     { title: "Killer Stardust", text: "One or two lines.", image: "https://.../cover.jpg",
 *       tag: "Browser + Windows", soon: true,            // soon = "coming soon" stamp
 *       links: { play: "...", download: "...", github: "...", page: "..." } }
 *     Any link you leave out simply has no button. No image? The card draws a VHS title card.
 *     "featured: true" also puts it on the home page.
 *
 * When an Arcade Phantasm game goes live: delete its `soon: true` and add `play:` - one line.
 */
var GH = "https://github.com/CursedPrograms/";
var PAGES = "https://cursedprograms.github.io/";

window.CATALOG = {

  games: [
    {
      section: "Play right now",
      blurb: "Straight in the browser. No install, no excuses.",
      items: [
        { title: "Killer Stardust", featured: true, tag: "Browser + Windows",
          text: "Steer the comet, eat the stardust, dodge the invaders that fall to the beat.",
          image: "https://killer-stardust.netlify.app/images/kdlogo.png", contain: true,
          links: { play: "https://killer-stardust.netlify.app/",
                   download: GH + "KillerStardust/releases/latest",
                   github: GH + "KillerStardust" } },
        { title: "Comets and the Commander", tag: "Browser 3D RTS",
          text: "Command a carrier at the centre of a sphere of space: mine comets, build a fleet, hold the void.",
          links: { play: PAGES + "comet-and-commander/", github: GH + "comet-and-commander" } }
      ]
    },
    {
      section: "Arcade Phantasm",
      blurb: "Haunted arcade cabinets, one quarter at a time.",
      more: { label: "Enter the arcade", url: "https://arcade-phantasm.netlify.app/" },
      items: [
        { title: "ROCKS OF RUIN", tag: "Arcade Phantasm",
          text: "Navigate an enormous asteroid field before it grinds you to dust.",
          links: { play: PAGES + "RocksOfRuin/", github: GH + "RocksOfRuin" } },
        { title: "PROTOCOL.hex", tag: "Arcade Phantasm", soon: true,
          text: "You're a virus loose inside a computer system.",
          links: { github: GH + "ProtocolHex" } },
        { title: "SÉANCE", tag: "Arcade Phantasm", soon: true,
          text: "A platformer where you summon your own past.",
          links: { github: GH + "Seance" } },
        { title: "RICOCHET REAPER", tag: "Arcade Phantasm", soon: true,
          text: "A frantic arena shooter. Every bullet comes back.",
          links: { github: GH + "RicochetReaper" } },
        { title: "GRAVE DANGER", tag: "Arcade Phantasm", soon: true,
          text: "A survival arcade game where every enemy you defeat stays dead... mostly.",
          links: { github: GH + "GraveDanger" } },
        { title: "VORTEX", tag: "Arcade Phantasm", soon: true,
          text: "You're falling through a collapsing dimension.",
          links: { github: GH + "Vortex" } },
        { title: "ORBIT", tag: "Arcade Phantasm", soon: true,
          text: "A tiny spacecraft caught between gravitational fields.",
          links: { github: GH + "Orbit" } },
        { title: "DEVOURER", tag: "Arcade Phantasm", soon: true,
          text: "You're a tiny black hole. Eat everything.",
          links: { github: GH + "Devourer" } }
      ]
    },
    {
      section: "On itch.io",
      blurb: "The Myxztrii saga and friends.",
      more: { label: "All on itch.io", url: "https://cursed-entertainment.itch.io/" },
      items: [
        { itch: "1593914", title: "Araknia", url: "https://cursed-entertainment.itch.io/araknia" },
        { itch: "1078338", title: "Nystylla: Girls of Maluxzka", url: "https://cursed-entertainment.itch.io/nystylla" },
        { itch: "1339326", title: "Arise Mexzmiriah", url: "https://cursed-entertainment.itch.io/arise-mexzmiriah",
          links: { play: "https://arise-mexzmiriah.netlify.app/" } },
        { itch: "742521", title: "Mirror Macabre", url: "https://cursed-entertainment.itch.io/mirror-macabre",
          links: { play: "https://mirror-macabre.netlify.app" } },
        { itch: "726332", title: "Retrofizia - Beginning", url: "https://cursed-entertainment.itch.io/retrofizia-beginning" },
        { itch: "1697123", title: "Nystylla: Mexzmiriah", url: "https://cursed-entertainment.itch.io/nystylla-mexzmiriah" }
      ]
    }
  ],

  tools: [
    {
      section: "Changeling",
      blurb: "Wear another face. Local face, age, gender, ancestry, makeup, hair and voice changers on your own GPU.",
      items: [
        { title: "Changeling Studio", featured: true, tag: "Every Changeling in one place",
          text: "Face swap, gender, age, ancestry, makeup, hairstyles, beards and voices: one launcher for the whole family.",
          image: PAGES + "Changeling-Studio/site/logo.png", contain: true,
          links: { page: PAGES + "Changeling-Studio/", github: GH + "Changeling-Studio" } },
        { title: "Imago", tag: "Face swap",
          text: "One face onto any photo or video, with GFPGAN clean-up.",
          image: PAGES + "Changeling-Imago/samples/changeling_sample.jpg",
          links: { page: PAGES + "Changeling-Imago/", github: GH + "Changeling-Imago" } },
        { title: "Imago Realtime", tag: "Live face swap",
          text: "The face swap live on the webcam for video calls, with a matching voice and recording.",
          links: { page: PAGES + "Changeling-Imago-Realtime/", github: GH + "Changeling-Imago-Realtime" } },
        { title: "Tiresias", tag: "Gender swap",
          text: "Reads the face, picks the other gender, and still looks like you.",
          image: PAGES + "Changeling-Tiresias/assets/tiresias_samples.jpg",
          links: { page: PAGES + "Changeling-Tiresias/", github: GH + "Changeling-Tiresias" } },
        { title: "Chronos", tag: "Age",
          text: "Age a face forwards or backwards, or see a five-age timeline.",
          image: PAGES + "Changeling-Chronos/assets/chronos_samples.jpg",
          links: { page: PAGES + "Changeling-Chronos/", github: GH + "Changeling-Chronos" } },
        { title: "Natio", tag: "Ancestry",
          text: "Your face as it might look born somewhere else in the world.",
          image: PAGES + "Changeling-Natio/assets/natio_samples.jpg",
          links: { page: PAGES + "Changeling-Natio/", github: GH + "Changeling-Natio" } },
        { title: "Cosmeta", tag: "Makeup + beards",
          text: "Makeup, hair colour and length, and beards: colour, stubble, shave.",
          image: PAGES + "Changeling-Cosmeta/assets/cosmetics_samples.jpg",
          links: { page: PAGES + "Changeling-Cosmeta/", github: GH + "Changeling-Cosmeta" } },
        { title: "Echo", tag: "Voices",
          text: "Train the voices the Changelings speak with, and speak in them live.",
          image: PAGES + "Changeling-Echo/assets/window.png",
          links: { page: PAGES + "Changeling-Echo/", github: GH + "Changeling-Echo" } },
        { title: "Tonsor", tag: "Hair + beards",
          text: "Anyone's hairstyle on you: the cut from one photo, the colour from another.",
          image: PAGES + "Changeling-Tonsor/assets/tonsor_samples.jpg",
          links: { page: PAGES + "Changeling-Tonsor/", github: GH + "Changeling-Tonsor" } }
      ]
    },
    {
      section: "Visual AI",
      items: [
        { title: "AetherCanvas AI", featured: true, tag: "Local web app",
          text: "Visual AI on your own GPU: text-to-image, photo editing, inpainting and more, in one place.",
          image: PAGES + "AetherCanvas-AI/docs/ui-studio.jpg",
          links: { page: PAGES + "AetherCanvas-AI/", github: GH + "AetherCanvas-AI" } }
      ]
    },
    {
      section: "Audio",
      items: [
        { title: "PulseAmp", tag: "Windows media player",
          text: "A free C++ media player with YouTube and SoundCloud, and MilkDrop visualizations.",
          image: PAGES + "PulseAmp-Media-Player/assets/promo/banner.jpg",
          links: { page: PAGES + "PulseAmp-Media-Player/", github: GH + "PulseAmp-Media-Player" } },
        { title: "OctaviaVSTs", tag: "Audio label",
          text: "Plugins and pedals: SafetyPin, Fuzz14, stringtuner and Solderless.",
          links: { page: PAGES + "OctaviaVSTs/", github: GH + "OctaviaVSTs" } }
      ]
    },
    {
      section: "On itch.io",
      more: { label: "All on itch.io", url: "https://cursed-entertainment.itch.io/" },
      items: [
        { itch: "1921106", title: "Confederate AI", url: "https://cursed-entertainment.itch.io/confederate-ai" },
        { itch: "1969867", title: "CEChat", url: "https://cursed-entertainment.itch.io/cechat",
          links: { play: "https://ce-chat.netlify.app/" } }
      ]
    }
  ],

  stories: [
    {
      section: "Stories",
      blurb: "Read them with the lights on.",
      items: [
        { title: "Dark Womb", cover: true, image: "images/story-covers/dark-womb-cover.png",
          links: { page: "https://dark-womb.netlify.app/" } },
        { title: "暗黒の子宮", cover: true, image: "images/story-covers/暗黒の子宮-cover.jpg",
          links: { page: "https://ankoku-no-shikyuu.netlify.app/" } },
        { title: "Shadow Shapes", cover: true, image: "images/story-covers/shadow-shapes-cover.png",
          links: { page: "https://shadow-shapes.netlify.app/" } },
        { title: "Chapters", cover: true, image: PAGES + "Chapters/images/cover.png",
          links: { page: PAGES + "Chapters/", github: GH + "Chapters" } }
      ]
    },
    {
      section: "Farica☆Kimora",
      blurb: "Actress, artist and performer. Punk records, videos and more.",
      items: [
        { title: "Lord of Flies", featured: true, tag: "Album",
          text: "The punk album by Farica☆Kimora: playable tracks, music videos and the record.",
          image: "https://farica-kimora.github.io/farica-kimora-lord-of-flies/images/cover.jpg",
          links: { page: "https://farica-kimora.github.io/farica-kimora-lord-of-flies/",
                   github: "https://github.com/Farica-Kimora/farica-kimora-lord-of-flies" } },
        { title: "Farica☆Kimora", tag: "Official site",
          text: "Discography, playable albums, videos and gallery.",
          image: "https://faricakimora.netlify.app/assets/hero-poster.jpg",
          links: { page: "https://faricakimora.netlify.app/",
                   github: "https://github.com/Farica-Kimora/FaricaKimora" } }
      ]
    }
  ],

  /* YouTube video ids for the home page tape shelf */
  videos: ["2MdBFC1E0fk", "KEPp2y7wWu8", "HbQUXI_3F7k", "vltgO1ylQlU", "54KuiSmx75o", "L34FoY8-7aM"],
  fanVideos: ["A8VBdjrVY9w", "22PiaowtG-8", "jziBoYmEyTc"]
};
