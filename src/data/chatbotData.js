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
      message: "Ravi Kumar D is a results-driven AI/ML Engineer specializing in deep learning and generative AI. He has hands-on experience building scalable, production-ready AI systems, including intelligent virtual assistants and advanced image enhancement platforms.",
      options: ["Technical Skills", "Projects You Done", "Hire / Contact"]
    },

    "Technical Skills": {
      patterns: [/skills/i, /tech/i, /technology/i],
      message: "Ravi brings a strong technical foundation in Python, FastAPI, PyTorch, and TensorFlow for AI/ML development. He is experienced in deploying scalable solutions using AWS and Terraform, and also has full-stack exposure with JavaScript, AJAX, jQuery, and relational databases.",
      options: ["Specialization Area", "Experience", "Hire / Contact"]
    },

    "Experience": {
      patterns: [/experience/i, /work/i],
      message: "Ravi has hands-on experience delivering end-to-end AI solutions — from data processing and model development to deployment and optimization. He has built real-world systems like virtual assistants and AI-driven image processing platforms with a strong focus on performance and scalability.",
      options: ["Projects You Done", "Why Should We Hire You?", "Hire / Contact"]
    },

    "Projects You Done": {
      patterns: [/project/i, /work done/i],
      message: "Ravi has developed impactful AI solutions, including a real-time Virtual Assistant with dynamic API interactions and an Image Enhancement platform powered by large models like Qwen for high-quality, prompt-driven transformations.",
      options: ["Experience", "Specialization Area", "Hire / Contact"]
    },

    "Specialization Area": {
      patterns: [/special/i, /domain/i, /expertise/i],
      message: "Ravi specializes in deep learning, generative AI, and model fine-tuning. His expertise lies in building scalable AI systems, integrating cloud services, and delivering real-time intelligent applications.",
      options: ["Technical Skills", "Projects You Done", "Hire / Contact"]
    },

    "Why Should We Hire You?": {
      patterns: [/why.*hire/i, /strength/i],
      message: "Ravi stands out for his ability to bridge theory and real-world execution. He has proven experience building production-grade AI systems, adapts quickly to new technologies, and consistently focuses on delivering scalable, high-impact solutions.",
      options: ["Technical Skills", "Hire / Contact"]
    },

    "Hire / Contact": {
      patterns: [/contact/i, /hire/i, /phone/i, /email/i],
      message: "📧 ravikumar.offical2003@gmail.com\n📞 7667009461\n\nRavi is actively open to AI/ML Engineer opportunities and is ready to contribute to impactful, real-world AI solutions.",
      options: ["Who is Ravi?", "Projects You Done"]
    }
  },

  fallback: {
    answer: "⚠️ I can only assist with Ravi Kumar D's profile. For detailed information, please review his resume or contact him directly at 📞 7667009461."
  }
};

export default chatbotData;