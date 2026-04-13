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
      message: "Ravi Kumar D is an AI/ML Engineer specializing in deep learning and generative AI. He has hands-on experience in building scalable, real-world AI systems including intelligent assistants and image enhancement platforms.",
      options: ["Technical Skills", "Projects You Done", "Hire / Contact"]
    },

    "Technical Skills": {
      message: "Ravi's technical stack includes Python, FastAPI, PyTorch, and TensorFlow for AI/ML. He also works with AWS, Terraform, SQL databases, and frontend technologies like JavaScript, AJAX, and jQuery.",
      options: ["Specialization Area", "Experience", "Hire / Contact"]
    },

    "Experience": {
      message: "Ravi has real-world experience in developing and deploying AI systems, including virtual assistants and image processing platforms. He has also worked on full-stack applications with scalable architectures and workflow automation.",
      options: ["Projects You Done", "Why Should We Hire You?", "Hire / Contact"]
    },

    "Projects You Done": {
      message: "Ravi has developed an AI Virtual Assistant for real-time intent-based responses and an Image Enhancement system using large models like Qwen for high-quality, prompt-driven modifications.",
      options: ["Experience", "Specialization Area", "Hire / Contact"]
    },

    "Specialization Area": {
      message: "Ravi specializes in deep learning, generative AI, model fine-tuning, and building scalable AI systems with cloud integration and real-time processing.",
      options: ["Technical Skills", "Projects You Done", "Hire / Contact"]
    },

    "Why Should We Hire You?": {
      message: "Ravi combines strong AI/ML fundamentals with real-world implementation experience. He focuses on building scalable and efficient solutions, adapts quickly to new technologies, and delivers impactful results.",
      options: ["Technical Skills", "Hire / Contact"]
    },

    "Hire / Contact": {
      message: "📧 ravikumar.offical2003@gmail.com\n📞 7667009461\n\nRavi is open to AI/ML opportunities and ready to contribute to impactful projects.",
      options: ["Who is Ravi?", "Projects You Done"]
    }
  },

  fallback: {
    answer: "For more details, please review Ravi's resume or contact him directly at 📞 7667009461."
  }
};

export default chatbotData;