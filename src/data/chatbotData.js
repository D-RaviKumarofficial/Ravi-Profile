const chatbotData = {
  start: {
    message: "👋 Hi! This is Ravi Kumar D's profile. What would you like to know?",
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
      message: "Ravi Kumar D is an AI/ML Engineer specializing in deep learning and generative AI. He has hands-on experience in building scalable, real-world AI systems including intelligent assistants and image enhancement platforms.",
      options: ["Technical Skills", "Projects You Done", "Hire / Contact"]
    },

    "Technical Skills": {
      patterns: [/skills/i, /tech/i, /technology/i],
      message: "Ravi's technical stack includes Python, FastAPI, PyTorch, and TensorFlow for AI/ML. He also works with AWS, Terraform, SQL databases, and frontend technologies like JavaScript, AJAX, and jQuery.",
      options: ["Specialization Area", "Experience", "Hire / Contact"]
    },

    "Experience": {
      patterns: [/experience/i, /work/i],
      message: "Ravi has real-world experience in developing and deploying AI systems, including virtual assistants and image processing platforms.",
      options: ["Projects You Done", "Why Should We Hire You?", "Hire / Contact"]
    },

    "Projects You Done": {
      patterns: [/project/i, /work done/i],
      message: "Ravi has developed an AI Virtual Assistant and an Image Enhancement system using large models like Qwen.",
      options: ["Experience", "Specialization Area", "Hire / Contact"]
    },

    "Specialization Area": {
      patterns: [/special/i, /domain/i, /expertise/i],
      message: "Ravi specializes in deep learning, generative AI, model fine-tuning, and scalable AI systems.",
      options: ["Technical Skills", "Projects You Done", "Hire / Contact"]
    },

    "Why Should We Hire You?": {
      patterns: [/why.*hire/i, /strength/i],
      message: "Ravi combines strong AI/ML fundamentals with real-world implementation experience and delivers scalable solutions.",
      options: ["Technical Skills", "Hire / Contact"]
    },

    "Hire / Contact": {
      patterns: [/contact/i, /hire/i, /phone/i, /email/i],
      message: "📧 ravikumar.offical2003@gmail.com\n📞 7667009461",
      options: ["Who is Ravi?", "Projects You Done"]
    }
  },

  fallback: {
    answer: "⚠️ I can only answer questions about Ravi Kumar D. Please review his resume or contact 📞 7667009461."
  }
};

export default chatbotData;