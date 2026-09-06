export const groups = [
  {
    org: 'Ava Software Private Limited',
    projects: [
      {
        id: 'poubelle-ai',
        title: 'Poubelle.ai – Intelligent Waste Classification System',
        type: 'PROD',
        shortDesc: 'End-to-end AI waste classification system using YOLO with a bin recommendation engine.',
        description: `Poubelle.ai is an intelligent waste classification system built for a production client engagement, designed to automatically identify and categorize waste items in real time. The system was developed as an end-to-end ML pipeline using YOLO-based object detection, achieving 88% accuracy on classification tasks with Amazon Bedrock as a fallback to support continuous learning from edge cases.

A key feature of the platform is an automated monthly retraining pipeline. The pipeline applies data augmentation strategies and retrains the model on newly collected samples, improving classification accuracy by 6% while maintaining strict model versioning and evaluation metrics to track drift and performance over time.

On top of the classification engine, an intelligent recommendation module was built to suggest the correct disposal bin for each item — choosing between recycle, compost, donate, or landfill categories. This recommendation system achieved a 91% user acceptance rate in production.

The backend was designed to integrate the trained model with cloud infrastructure on AWS, ensuring the misclassification loop feeds predictions back into the training set to continuously harden model accuracy.`,
        tech: ['YOLO', 'Amazon Bedrock', 'Python', 'Computer Vision', 'AWS', 'ML Pipeline'],
      },
      {
        id: 'shoob-photography',
        title: 'Shoob Photography – Background Removal & Enhancement',
        type: 'PROD',
        shortDesc: 'AI-powered background removal and image enhancement with pixel-perfect edge refinement.',
        description: `Shoob Photography is a production-grade image processing system that performs intelligent background removal and image enhancement for professional photography workflows. The core segmentation engine is based on MODNet, a semantic segmentation model, trained using transfer learning to deliver 96% background removal accuracy on diverse photographic content.

The computer vision pipeline was custom-engineered with PIL-based enhancement and edge artifact refinement techniques to produce pixel-perfect cutouts without halos or residual edge noise. This level of precision made the outputs directly usable in commercial photo editing and e-commerce workflows.

To meet production-scale demand, the system was built as a scalable batch processing service supporting more than 100 concurrent requests, with the entire pipeline integrated into AWS Lambda and Amazon S3 for asynchronous job-based image processing.

Inference was optimized through model quantization, which reduced latency by 40% and lowered serving costs by 35%, making the service both fast and cost-efficient at scale.`,
        tech: ['MODNet', 'Python', 'PIL', 'OpenCV', 'AWS Lambda', 'Amazon S3'],
      },
      {
        id: 'video-proctoring',
        title: 'Video Proctoring Engine – AI Exam Monitoring',
        type: 'POC',
        shortDesc: 'AI-based exam surveillance system detecting cheating patterns via facial and audio analysis.',
        description: `Video Proctoring Engine is an AI-based exam monitoring system (POC) engineered to detect cheating patterns and suspicious activities during online examinations using a combination of computer vision and audio classification.

The facial analysis module leverages MediaPipe to track eye movements, gaze direction, and face orientation in real time, flagging abnormal behaviors such as prolonged gaze shifts or face-looking-away patterns. A parallel audio classifier categorizes voice patterns, identifying conversations or unusual sounds during the exam session with 94% accuracy.

Additional detection layers integrate YOLO v5 object detection to identify unauthorized materials — such as phones, books, or other devices — appearing in the camera frame during the test.

Together, these modules form a multi-signal surveillance pipeline that produces confidence-scored alerts for proctors, enabling automated flagging of high-risk behavior with explainable evidence for human review.`,
        tech: ['MediaPipe', 'YOLOv5', 'Computer Vision', 'Audio Classification', 'Python', 'OpenCV'],
      },
      {
        id: 'thryve-labs',
        title: 'Thryve Labs – Virtual Assistant',
        type: 'PROD',
        shortDesc: 'Intelligent AI virtual assistant with real-time intent analysis and AWS Bedrock integration.',
        description: `Thryve Labs is an enterprise-grade AI Virtual Assistant platform built for a client to automate intelligent customer interactions at scale. The system was designed to understand natural language queries, determine user intent in real time, and generate contextually accurate responses using large foundation models hosted on Amazon Bedrock.

At the core of the architecture is a Strands-based agent framework that dynamically selects and invokes the appropriate client-provided API endpoints based on the classified intent of each query. This eliminated the need for hardcoded routing logic and made the system highly adaptable to evolving business requirements.

The infrastructure was fully cloud-native, provisioned and managed using Terraform on AWS. Services leveraged include Amazon Bedrock for model inference, AWS Lambda for serverless execution, API Gateway for secure endpoint exposure, and Amazon S3 for storing conversation logs and model artifacts.

The assistant was integrated into the client's existing web platform via a REST API layer, with response latency optimized through caching strategies and model prompt engineering. Guardrails were implemented to ensure safe, on-topic responses aligned with the client's domain.

The project also included a feedback loop mechanism where low-confidence responses were flagged for human review, enabling continuous improvement of the model's accuracy over time.`,
        tech: ['AWS', 'Amazon Bedrock', 'Terraform', 'Strands Agent', 'Lambda', 'API Gateway'],
      },
      {
        id: 'chaotic',
        title: 'Chaotic – Character Enhancement System',
        type: 'POC',
        shortDesc: 'AI-powered anime character image restoration and enhancement using Qwen 20B model.',
        description: `Chaotic is an AI-powered image enhancement and restoration system developed for a media client dealing with large volumes of legacy anime episode assets. The primary goal was to upgrade low-resolution, visually degraded character images to high-quality outputs while preserving the original character identity and art style.

The system leverages the Qwen Vision-Language Model (20B parameters) to perform high-resolution image generation and targeted character modifications based on user-defined natural language prompts. Users can describe desired changes — such as altering clothing, expressions, or background elements — and the model applies those transformations while maintaining visual consistency with the source character.

A prompt engineering pipeline was developed to translate user inputs into structured model instructions, ensuring deterministic and repeatable outputs. The system supports batch processing, allowing the client to enhance hundreds of frames in parallel using an asynchronous job queue.

All generated outputs are stored in a structured AWS S3 bucket hierarchy, enabling efficient retrieval by episode, character, and modification type. A metadata tagging system was implemented to support content search and filtering across the media library.

The backend was built with FastAPI, exposing endpoints for job submission, status polling, and result retrieval. The entire pipeline was containerized using Docker and deployed on AWS ECS for scalable, on-demand processing.`,
        tech: ['Python', 'Qwen 20B', 'AWS S3', 'FastAPI', 'Docker', 'AWS ECS'],
      },
      {
        id: 'neuralhub',
        title: 'NeuralHub – Training & Inference Automation',
        type: 'PROD',
        shortDesc: 'Internal automation platform for ML model training and inference workflows using Gradio.',
        description: `NeuralHub is an internal automation platform built at Ava Software to streamline the end-to-end lifecycle of machine learning model training and inference. The platform was created to reduce the manual overhead involved in configuring, launching, and monitoring ML experiments across different model architectures and datasets.

The system is built around a Gradio-based workflow interface that allows engineers and researchers to configure training jobs, select model architectures, set hyperparameters, and trigger inference pipelines — all through an intuitive web UI without writing boilerplate code.

Under the hood, NeuralHub orchestrates training jobs on GPU-backed infrastructure, monitors resource utilization, and logs metrics in real time to a centralized dashboard. It supports multiple training backends and integrates with Hugging Face model repositories for seamless model loading and fine-tuning.

The inference module supports both batch and real-time prediction modes, with automatic model versioning and rollback capabilities. Each deployed model is wrapped in a FastAPI service and registered in an internal model registry for discoverability and governance.

NeuralHub significantly reduced the time-to-experiment for the internal AI team, enabling faster iteration cycles and more consistent reproducibility across research and production environments.`,
        tech: ['Python', 'Gradio', 'FastAPI', 'Hugging Face', 'PyTorch', 'AWS'],
      },
    ],
  },
  {
    org: "Hema's Enterprise Private Limited",
    projects: [
      {
        id: 'ck-ticketing',
        title: 'CK Ticketing Tool',
        type: 'PROD',
        shortDesc: 'Custom ticketing system with dynamic workflows, multi-level approvals and automated notifications.',
        description: `CK Ticketing Tool is a fully custom-built internal ticketing and workflow management system developed for Hema's Enterprise Private Limited to streamline their operational request handling and approval processes.

The system was designed to replace manual, email-based request tracking with a structured digital workflow. Each ticket is created through dynamic forms that adapt based on the request category, ensuring only relevant fields are captured for each type of issue or task.

At the heart of the platform is a configurable workflow engine that allows administrators to define multi-step approval chains. Tickets flow through hierarchical approval levels — from team leads to department heads — with each stage gating progression to the next. This ensured accountability and traceability across all requests.

Automated email notifications are triggered at every stage transition, keeping all stakeholders informed in real time without manual follow-up. Notifications include ticket details, current status, and the next required action, reducing response delays significantly.

The backend is built with PHP and uses MySQL as the primary database for persistent storage of all ticket data, audit trails, and workflow configurations. The system also lays the groundwork for future analytics and reporting dashboards, with structured data models designed to support filtering, aggregation, and export of ticket history.

The frontend was built using Bootstrap for a clean, responsive UI and vanilla JavaScript for dynamic form interactions, ensuring usability across desktop and mobile devices.`,
        tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      },
      {
        id: 'luminar',
        title: 'Luminar – Task Management System',
        type: 'PROD',
        shortDesc: 'Role-based project management platform with AWS S3 storage, OAuth auth and real-time monitoring.',
        description: `Luminar is a comprehensive role-based project and task management platform developed for Hema's Enterprise Private Limited to centralize team collaboration, task tracking, and performance oversight across multiple projects and departments.

The platform supports granular role-based access control, where each user — whether a manager, team lead, or contributor — sees only the data and actions relevant to their role. Administrators can define custom permission sets, ensuring full control over who can create, assign, review, or close tasks.

Task assignment is handled through an intuitive interface where managers can break projects into milestones and assign individual tasks with deadlines, priority levels, and file attachments. Team members can upload supporting documents and deliverables directly within each task, with all files securely stored in AWS S3 and accessible via pre-signed URLs.

Authentication is handled through OAuth-based login, providing secure and seamless access without requiring users to manage separate credentials. Session management and token handling were implemented to maintain security across all user interactions.

A CRON job-based automation layer handles recurring task synchronization, deadline reminders, and status updates by integrating with external APIs. This eliminated the need for manual status checks and kept all project timelines accurate and up to date.

The centralized review module provides managers with a real-time monitoring dashboard showing task completion rates, team performance metrics, pending approvals, and flagged issues. Feedback can be submitted directly on tasks, creating a closed-loop communication channel between reviewers and contributors.

The frontend was built using CodeIgniter for structured MVC architecture, with jQuery and Ajax powering dynamic, non-reload interactions throughout the UI. Bootstrap ensured a fully responsive layout across all screen sizes.`,
        tech: ['PHP', 'CodeIgniter', 'AWS S3', 'jQuery', 'Ajax', 'Bootstrap'],
      },
    ],
  },
];