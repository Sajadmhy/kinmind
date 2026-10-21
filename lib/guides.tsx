import type { ReactNode } from "react";
import { LESSON_HREF } from "./content";

export type Guide = {
  slug: string;
  title: string;
  /** Short line shown on the home page card. */
  card: string;
  linkLabel: string;
  tint: string;
  icon: ReactNode;
  lead: string;
  inShort: string[];
  easyRead: string[];
  whatItIs: string[];
  feelsLike: string[];
  strengths: string[];
  helps: { title: string; body: string }[];
  others: { family: string; school: string; work: string };
  related: { label: string; href: string; kind: "Tool" | "Game" | "Video" }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "adhd",
    title: "ADHD",
    card: "Focus, time, energy and the bright side of a busy brain.",
    linkLabel: "Explore ADHD",
    tint: "var(--tint1)",
    icon: <path d="M13 3L5 13h6l-1 8 8-10h-6z" />,
    lead: "ADHD is a difference in how the brain handles attention, energy and planning. It is not laziness, and it is not a lack of caring.",
    inShort: [
      "ADHD affects focus, time, energy and impulses — often all at once.",
      "Attention isn’t missing; it’s hard to point where you want it.",
      "The right tools and support make everyday life much easier.",
    ],
    easyRead: [
      "ADHD is a way some brains work.",
      "It can be hard to focus on boring things.",
      "It can be easy to focus a lot on fun things.",
      "You might feel restless or act fast without thinking.",
      "Small steps, reminders and kind support can help.",
    ],
    whatItIs: [
      "ADHD stands for attention deficit hyperactivity disorder. It is a lifelong difference in how the brain manages attention, activity and self-control. Many people are diagnosed as children, and many others only find out as adults.",
      "People with ADHD often find it hard to start, switch or finish tasks — especially ones that feel dull. At the same time, they may focus intensely on things they find interesting. This is sometimes called hyperfocus.",
      "ADHD looks different in different people. Some are mostly inattentive, some are mostly restless or impulsive, and many are a mix of both.",
    ],
    feelsLike: [
      "Knowing exactly what to do, but not being able to start",
      "Losing track of time — “five minutes” turns into an hour",
      "Forgetting things you meant to remember, like keys or appointments",
      "Feeling restless, fidgety or needing to move",
      "Strong feelings that arrive quickly, including feeling rejected",
    ],
    strengths: [
      "Creativity and seeing ideas others miss",
      "Deep focus on things that matter to you",
      "Energy, curiosity and enthusiasm",
      "Staying calm and quick-thinking in a crisis",
    ],
    helps: [
      { title: "Make tasks smaller", body: "Break a task into steps so small the first one takes under two minutes. Starting is often the hardest part." },
      { title: "Put time where you can see it", body: "Use visual timers, clocks or calendars you can see at a glance — chosen by you, not ones that rush you." },
      { title: "Use outside reminders", body: "Alarms, sticky notes and checklists hold things for you, so your brain doesn’t have to." },
      { title: "Move your body", body: "Fidget tools, standing up or short walks can help many people focus." },
      { title: "Talk to a professional", body: "A doctor or psychologist can assess ADHD and talk through options like coaching, therapy or medication." },
    ],
    others: {
      family: "Give one instruction at a time, notice effort as well as results, and stay calm about forgotten things.",
      school: "Allow movement breaks, give written as well as spoken instructions, and break big projects into checkpoints.",
      work: "Offer quiet spaces, clear written priorities and flexible ways to meet deadlines.",
    },
    related: [
      { label: "Tiny-Steps Planner", href: "/#psychology", kind: "Tool" },
      { label: "Pattern Garden", href: "/#play-garden", kind: "Game" },
      { label: "What is executive function?", href: "/#videos", kind: "Video" },
    ],
  },
  {
    slug: "ocd",
    title: "OCD",
    card: "Understand thought loops and the urge to check, and how to loosen them.",
    linkLabel: "Explore OCD",
    tint: "var(--tint3)",
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
        <path d="M18 3v4h-4M6 21v-4h4" />
      </>
    ),
    lead: "OCD is a pattern of unwanted, repeating thoughts and the urge to do things to make them go away. It is much more than liking things tidy.",
    inShort: [
      "OCD brings worries that keep coming back (obsessions).",
      "It creates urges to check, repeat or avoid things (compulsions).",
      "Compulsions bring short relief but keep the loop going — and that loop can be loosened.",
    ],
    easyRead: [
      "OCD can bring worries that keep coming back.",
      "The worries can feel scary or wrong.",
      "You might feel you must check or repeat things.",
      "Checking helps for a short time only.",
      "A therapist can help you practise small brave steps.",
    ],
    whatItIs: [
      "OCD stands for obsessive-compulsive disorder. Obsessions are unwanted thoughts, images or urges that feel stuck and cause distress. Compulsions are things people do — out loud or in their heads — to feel safer or to stop the worry.",
      "Having an unwanted thought does not mean you want it or will act on it. People with OCD are often most upset by thoughts that go against what they care about most.",
      "OCD can be about many things: germs, harm, doubt, things feeling “just right”, relationships or religion. It is a recognised condition, and it can get better with the right support.",
    ],
    feelsLike: [
      "Checking a door, a message or the oven again and again",
      "Needing to do something a set number of times",
      "Asking others for reassurance, even when you know the answer",
      "Avoiding places or things that set off the worry",
      "Feeling that something bad will happen if you don’t do the ritual",
    ],
    strengths: [
      "Caring deeply about doing the right thing",
      "Noticing detail",
      "Great courage — facing fears takes real bravery",
    ],
    helps: [
      { title: "Name the loop", body: "Saying “that’s OCD talking” can create a little space between you and the thought." },
      { title: "Try ERP with a therapist", body: "Exposure and response prevention means facing fears in small, planned steps without doing the compulsion. It is one of the best-studied treatments for OCD." },
      { title: "Delay, don’t fight", body: "Instead of pushing a thought away, try waiting a few minutes before acting on an urge. The urge often softens on its own." },
      { title: "Cut down reassurance", body: "Reassurance helps for a moment but feeds the loop. Family can learn kind ways to support without giving it." },
      { title: "Get an assessment", body: "A doctor or psychologist can confirm OCD and help you find therapy. Some people also use medication." },
    ],
    others: {
      family: "Be patient, avoid joining in with rituals, and praise brave steps — however small.",
      school: "Allow extra time when doubts slow work down, and don’t draw attention to rituals in front of others.",
      work: "Offer flexibility around deadlines and a private place to take a break when anxiety is high.",
    },
    related: [
      { label: "Brave Steps Ladder", href: "/#psychology", kind: "Tool" },
      { label: "Thought Reframe", href: "/#psychology", kind: "Tool" },
      { label: "OCD: why the brain asks twice", href: LESSON_HREF, kind: "Video" },
    ],
  },
  {
    slug: "autism",
    title: "Autism",
    card: "Sensory needs, communication styles, routines and recharging.",
    linkLabel: "Explore autism",
    tint: "var(--tint4)",
    icon: <path d="M6.5 9a3 3 0 1 0 0 6c2.5 0 3.5-2 5.5-3s3-3 5.5-3a3 3 0 1 1 0 6c-2.5 0-3.5-2-5.5-3S9 9 6.5 9z" />,
    lead: "Autism is a different way of experiencing the world — how you sense it, communicate in it and make sense of it. Every autistic person is different.",
    inShort: [
      "Autistic people may communicate, sense and think in different ways.",
      "Senses like sound, light and touch can feel much stronger — or weaker.",
      "Routines, clear communication and time to recharge often help.",
    ],
    easyRead: [
      "Autism is a way some brains work.",
      "Noise, light or touch can feel very strong.",
      "Talking with people can feel tiring or confusing.",
      "Routines and clear words can help you feel safe.",
      "It is okay to rest and recharge.",
    ],
    whatItIs: [
      "Autism is a lifelong difference in how a person communicates, relates to others and experiences their senses. It is often described as a spectrum, because it shows up in many different ways and needs change over time.",
      "Many autistic people have deep interests they love to explore, prefer predictable routines, and communicate in direct or non-spoken ways. Some people use “autistic person” and others prefer “person with autism” — it is fine to ask what someone prefers.",
      "Spending a long time hiding autistic traits to fit in (sometimes called masking) can be exhausting and can lead to burnout. Feeling accepted as you are makes a big difference.",
    ],
    feelsLike: [
      "Busy places feeling loud, bright and overwhelming",
      "Needing time alone after socialising",
      "Finding unspoken social rules confusing",
      "Feeling upset when plans change suddenly",
      "Moving, rocking or fidgeting (stimming) to feel calm",
    ],
    strengths: [
      "Deep knowledge and focus in areas of interest",
      "Honesty and direct communication",
      "Noticing patterns and details",
      "Loyalty and a strong sense of fairness",
    ],
    helps: [
      { title: "Know your senses", body: "Map what calms you and what overwhelms you. Ear defenders, sunglasses or soft clothing can help a lot." },
      { title: "Plan for change", body: "Visual schedules and a heads-up before changes make the day more predictable." },
      { title: "Say it clearly", body: "Ask others for direct, literal communication — and written follow-ups if that helps." },
      { title: "Protect recharge time", body: "Build in quiet time after busy days. Rest is not a reward; it is something you need." },
      { title: "Seek understanding support", body: "An assessment can help you understand yourself and get support at school or work." },
    ],
    others: {
      family: "Respect sensory needs and stimming, warn about changes early, and value special interests.",
      school: "Offer a quiet space, visual timetables and clear, literal instructions.",
      work: "Give written agendas, adjust lighting and noise, and make social events optional.",
    },
    related: [
      { label: "My Sensory Profile", href: "/#psychology", kind: "Tool" },
      { label: "Calm Sort", href: "/#play-sort", kind: "Game" },
      { label: "Autism and sensory overload", href: "/#videos", kind: "Video" },
    ],
  },
  {
    slug: "dyslexia",
    title: "Dyslexia",
    card: "Reading and spelling tools, and ways to show what you really know.",
    linkLabel: "Explore dyslexia",
    tint: "var(--tint2)",
    icon: <path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z" />,
    lead: "Dyslexia is a difference in how the brain works with the sounds and letters in words. It affects reading and spelling — not how clever you are.",
    inShort: [
      "Dyslexia makes reading, spelling and writing harder.",
      "It has nothing to do with intelligence.",
      "Tools like text-to-speech and clear fonts make words easier.",
    ],
    easyRead: [
      "Dyslexia is a way some brains work.",
      "Reading and spelling can be hard.",
      "Letters and sounds can get mixed up.",
      "You are just as clever as everyone else.",
      "Listening tools and extra time can help.",
    ],
    whatItIs: [
      "Dyslexia is a common learning difference. It mainly affects how the brain links sounds to letters, which makes reading, spelling and writing slower or harder. It can also affect memory for lists and the order of things.",
      "Dyslexia runs in families and lasts for life, but people find many ways to work with it. It is not caused by poor teaching or not trying hard enough.",
      "Many dyslexic people are strong at big-picture thinking, problem solving and creative ideas.",
    ],
    feelsLike: [
      "Reading slowly, or re-reading lines to understand them",
      "Spelling the same word differently each time",
      "Finding it hard to copy from a board or follow long instructions",
      "Knowing the answer but struggling to write it down",
      "Feeling tired after a lot of reading",
    ],
    strengths: [
      "Big-picture and creative thinking",
      "Strong spoken communication and storytelling",
      "Problem solving and seeing new connections",
    ],
    helps: [
      { title: "Listen instead of read", body: "Text-to-speech, audiobooks and read-aloud tools let you take in information without the strain." },
      { title: "Make text easier on the eyes", body: "Larger text, more spacing and a dyslexia-friendly font can help. Try the settings at the top of this page." },
      { title: "Speak your ideas", body: "Voice typing and mind maps let you get ideas out before worrying about spelling." },
      { title: "Ask for extra time", body: "Extra time in tests and tasks is a fair adjustment, not a favour." },
      { title: "Get an assessment", body: "A specialist assessment can confirm dyslexia and explain which support will help most." },
    ],
    others: {
      family: "Read together for fun, praise ideas over spelling, and never compare reading speed.",
      school: "Provide handouts in advance, allow audio and spoken answers, and avoid asking to read aloud without warning.",
      work: "Share documents ahead of meetings, allow assistive software, and confirm key points in conversation.",
    },
    related: [
      { label: "Word Builder", href: "/#play-words", kind: "Game" },
      { label: "Reading with dyslexia: tips that help", href: "/#videos", kind: "Video" },
      { label: "Tiny-Steps Planner", href: "/#psychology", kind: "Tool" },
    ],
  },
  {
    slug: "dyspraxia",
    title: "Dyspraxia",
    card: "Movement, coordination and planning — with practical everyday tips.",
    linkLabel: "Explore dyspraxia",
    tint: "var(--tint5)",
    icon: <path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" />,
    lead: "Dyspraxia affects how the brain plans and coordinates movement. Everyday things like handwriting, sport or getting dressed can take more effort.",
    inShort: [
      "Dyspraxia affects coordination, balance and planning movements.",
      "It can also affect organisation and remembering steps.",
      "Practical tools and extra time make daily life easier.",
    ],
    easyRead: [
      "Dyspraxia is a way some brains work.",
      "Moving your body can feel clumsy or slow.",
      "Writing, sport or getting dressed can be hard.",
      "Planning steps in order can be tricky.",
      "Practice, tools and patience can help.",
    ],
    whatItIs: [
      "Dyspraxia, also called developmental coordination disorder (DCD), is a lifelong difference in how the brain sends messages to the body to plan and carry out movements. It is not caused by weak muscles.",
      "It can affect large movements, like running and balance, and fine movements, like handwriting or using cutlery. Many people also find planning, organising and following steps harder.",
      "Dyspraxia often appears alongside other differences like ADHD or dyslexia.",
    ],
    feelsLike: [
      "Bumping into things or dropping things often",
      "Handwriting that is slow, tiring or hard to read",
      "Finding it hard to learn new physical skills, like riding a bike",
      "Getting lost or confused about left and right",
      "Feeling overwhelmed when a task has many steps",
    ],
    strengths: [
      "Determination and persistence",
      "Creative and strategic thinking",
      "Empathy and understanding of others who find things hard",
    ],
    helps: [
      { title: "Use the right tools", body: "Pencil grips, easy-fasten clothes, non-slip mats and adapted cutlery can remove a lot of daily effort." },
      { title: "Type or speak", body: "A keyboard or voice typing can be quicker and less tiring than handwriting." },
      { title: "Break steps down", body: "Picture checklists help with routines like getting ready in the morning." },
      { title: "Practise little and often", body: "Short, regular practice builds new skills without exhaustion." },
      { title: "See an occupational therapist", body: "An occupational therapist can assess dyspraxia and suggest exercises and tools that fit your life." },
    ],
    others: {
      family: "Allow extra time to get ready, choose easy clothing, and celebrate effort in new skills.",
      school: "Allow typing, give printed notes, and adapt PE so everyone can join in.",
      work: "Offer an organised workspace, written instructions and flexibility with physical tasks.",
    },
    related: [
      { label: "Tiny-Steps Planner", href: "/#psychology", kind: "Tool" },
      { label: "Calm Sort", href: "/#play-sort", kind: "Game" },
      { label: "What is executive function?", href: "/#videos", kind: "Video" },
    ],
  },
  {
    slug: "tourettes",
    title: "Tourette’s & tics",
    card: "What tics are, how stress affects them, and how others can help.",
    linkLabel: "Explore Tourette’s",
    tint: "var(--tint6)",
    icon: <path d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />,
    lead: "Tics are movements or sounds that happen without meaning to. Tourette’s is when someone has both movement and sound tics for over a year.",
    inShort: [
      "Tics are movements or sounds you don’t choose to make.",
      "Stress, excitement and tiredness can make tics stronger.",
      "Understanding from others matters more than trying to stop tics.",
    ],
    easyRead: [
      "A tic is a movement or sound you do not choose.",
      "Tourette’s means you have tics for a long time.",
      "Tics can get stronger when you are stressed or tired.",
      "It does not help to ask someone to stop.",
      "Kind people and calm places can help.",
    ],
    whatItIs: [
      "Tics are sudden, repeated movements or sounds. Motor tics include blinking, shrugging or head movements. Vocal tics include sniffing, throat clearing, words or phrases.",
      "Tourette’s syndrome is diagnosed when a person has had several motor tics and at least one vocal tic for more than a year, starting in childhood. Tics often change over time, and for many people they become milder in adulthood.",
      "Many people feel a build-up, like an itch or pressure, before a tic. Holding tics in is possible for a short while for some people, but it is tiring and the tics usually come back stronger.",
    ],
    feelsLike: [
      "A feeling of pressure or an urge just before a tic",
      "Tics getting stronger when stressed, excited or tired",
      "Feeling tired after holding tics in at school or work",
      "Worrying about what others think",
      "Tics changing — one fades and a new one appears",
    ],
    strengths: [
      "Resilience and humour",
      "Quick thinking and creativity",
      "Empathy for others who are different",
    ],
    helps: [
      { title: "Lower the pressure", body: "Calm, accepting places often mean fewer and gentler tics." },
      { title: "Don’t ask someone to stop", body: "Drawing attention to tics usually makes them worse. Carry on as normal." },
      { title: "Learn about CBIT", body: "Comprehensive behavioural intervention for tics is a therapy that teaches ways to manage the urge. A trained therapist can help." },
      { title: "Plan for tiring times", body: "Rest, movement breaks and enough sleep can make a difference." },
      { title: "Talk to a doctor", body: "A doctor can confirm a tic disorder and talk about therapy and other support." },
    ],
    others: {
      family: "Ignore tics kindly, help explain tics to others if your child wants that, and watch for stress.",
      school: "Agree a quiet exit plan, allow tests in a separate room, and help classmates understand.",
      work: "Offer a private space if needed and focus on the work, not the tics.",
    },
    related: [
      { label: "Bubble Breath", href: "/#play-bubble", kind: "Game" },
      { label: "Thought Reframe", href: "/#psychology", kind: "Tool" },
      { label: "Memory Match", href: "/#play-match", kind: "Game" },
    ],
  },
];

export const guideHref = (slug: string) => `/guides/${slug}`;
export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
