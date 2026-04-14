const chatbotData = {
  start: {
    message: "👋 Hey there! I'm Ravi's \ assistant. What would you like to explore about ravi?",
    options: [
      "Who is Ravi?",
      "Technical Skills",
      "Experience",
      "Projects You Done",
      "Specialization Area",
      "Why Should We Hire You?",
      "Hire / Contact"
    ]
  },

  nodes: {
    "Who is Ravi?": {
      patterns: [/who\s*is\s*ravi/i, /about\s*ravi/i],
      message: "🚀 Ravi Kumar D is an AI/ML Engineer who doesn't just build models — he builds solutions that work in the real world.\n\nWith deep expertise in Generative AI and Deep Learning, Ravi has designed and shipped production-grade AI systems from scratch — including intelligent virtual assistants and AI-powered image enhancement platforms. He's the kind of engineer who takes an idea from whiteboard to deployment, fast.",
      options: ["Technical Skills", "Projects You Done", "Hire / Contact"]
    },

    "Technical Skills": {
      patterns: [/skills/i, /tech/i, /technology/i],
      message: "🛠️ Ravi's tech stack is built for modern AI development:\n\n• 🧠 AI/ML: Python, FastAPI, PyTorch, TensorFlow, Hugging Face, LLMs & more\n• ⚡ Backend: FastAPI, REST APIs, real-time systems\n• ☁️ Cloud & DevOps: AWS, Terraform, scalable deployments\n• 🌐 Full-Stack: HTML, CSS, Bootstrap, JavaScript, AJAX, jQuery, Laravel, CodeIgniter, SQL\n\nHe doesn't just know the tools — he knows when and how to use them to ship fast and scale smart.",
      options: ["Specialization Area", "Experience", "Hire / Contact"]
    },

    "Experience": {
      patterns: [/experience/i, /work/i],
      message: "💼 Ravi has end-to-end experience delivering AI products that actually make it to production.\n\nFrom designing data pipelines and training models to optimizing inference and deploying on cloud infrastructure — he owns the full lifecycle. His work spans real-time virtual assistants and AI-driven image processing platforms, always with a sharp focus on performance, reliability, and scale.\n\nHe doesn't just write code. He solves problems.",
      options: ["Projects You Done", "Why Should We Hire You?", "Hire / Contact"]
    },

    "Projects You Done": {
      patterns: [/project/i, /work done/i],
      message: "🏗️ Here are two standout projects that showcase Ravi's capabilities:\n\n🤖 Virtual Assistant — A real-time AI assistant with dynamic API integrations, capable of handling complex user queries with low latency and high accuracy.\n\n🖼️ AI Image Enhancement Platform — Leverages large vision-language models (including Qwen) for prompt-driven, high-quality image transformations. Built for scale, designed for impact.\n\nBoth projects went from concept to production — not just demos.",
      options: ["Experience", "Specialization Area", "Hire / Contact"]
    },

    "Specialization Area": {
      patterns: [/special/i, /domain/i, /expertise/i],
      message: "🎯 Ravi specializes in Deep Learning — designing, training, and optimizing models that solve real-world problems.\n\n• Custom neural network architectures tailored to the task\n• Model optimization for speed, accuracy, and efficiency\n• End-to-end ownership — from data to deployment\n\nDeep Learning isn't just a skill for Ravi — it's his core strength.",
      options: ["Technical Skills", "Projects You Done", "Hire / Contact"]
    },

    "Why Should We Hire You?": {
      patterns: [/why.*hire/i, /strength/i],
      message: "💡 Great question. Here's the honest answer:\n\nRavi bridges the gap between AI research and real-world engineering — a rare combination. He has shipped production AI systems, not just academic projects. He picks up new technologies fast, writes clean and scalable code, and brings a problem-first mindset to everything he builds.\n\nYou're not just hiring someone who knows AI. You're hiring someone who can build AI products that deliver measurable value — from day one.",
      options: ["Technical Skills", "Hire / Contact"]
    },

    "Hire / Contact": {
      patterns: [/contact/i, /hire/i, /phone/i, /email/i],
      message: "📬 Let's connect! Ravi is actively looking for AI/ML Engineer roles where he can make a real impact.\n\n📧 ravikumar.offical2003@gmail.com\n📞 7667009461\n\nWhether you have a role, a project, or just want to talk AI — he's ready. Don't hesitate to reach out! 🤝",
      options: ["Who is Ravi?", "Projects You Done"]
    }
  },

  fallback: {
    answer: "🤔 I'm specifically here to tell you about Ravi Kumar D's profile and expertise. Try asking about his skills, projects, or experience — or reach out directly at 📞 7667009461 or 📧 ravikumar.offical2003@gmail.com."
  }
};

export default chatbotData;
