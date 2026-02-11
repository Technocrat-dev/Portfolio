export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  python: {
    name: "Python",
    iconName: "python",
  },
  go: {
    name: "Go",
    iconName: "go",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  fastapi: {
    name: "FastAPI",
    iconName: "fastapi",
  },
  nextjs: {
    name: "Next.js",
    iconName: "nextjs",
  },
  react: {
    name: "React",
    iconName: "react",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  docker: {
    name: "Docker",
    iconName: "docker",
  },
  kubernetes: {
    name: "Kubernetes",
    iconName: "kubernetes",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  postgresql: {
    name: "PostgreSQL",
    iconName: "postgresql",
  },
  mongo: {
    name: "MongoDB",
    iconName: "mongo",
  },
  pytorch: {
    name: "PyTorch",
    iconName: "pytorch",
  },
  tensorflow: {
    name: "TensorFlow",
    iconName: "tensorflow",
  },
  opencv: {
    name: "OpenCV",
    iconName: "opencv",
  },
  grpc: {
    name: "gRPC",
    iconName: "grpc",
  },
  chromadb: {
    name: "ChromaDB",
    iconName: "chromadb",
  },
  flask: {
    name: "Flask",
    iconName: "flask",
  },
  openvino: {
    name: "OpenVINO",
    iconName: "openvino",
  },
  websocket: {
    name: "WebSocket",
    iconName: "websocket",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};