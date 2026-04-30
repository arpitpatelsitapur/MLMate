const SKILLS = [
  {
    id: "ml",
    name: "Machine Learning",
    icon: "🤖",
    active: true,
    desc: "Core ML concepts, algorithms, evaluation & MLOps",
    sections: [
      {
        id: "preprocessing",
        name: "Data Preprocessing & EDA",
        questions: [
          {
            q: "Which technique is used to handle missing values by replacing them with the column's average?",
            options: ["Mode imputation", "Mean imputation", "KNN imputation", "Dropping rows"],
            answer: 1,
            explanation: "Mean imputation replaces missing values with the arithmetic mean of the feature column. It's simple but can distort distributions if data is not normally distributed."
          },
          {
            q: "What does the term 'feature engineering' refer to?",
            options: [
              "Selecting the best ML algorithm",
              "Transforming raw data into informative features for models",
              "Evaluating model performance on test sets",
              "Deploying models to production"
            ],
            answer: 1,
            explanation: "Feature engineering is the process of using domain knowledge to create, transform, or select input variables (features) that improve model performance."
          },
          {
            q: "Which plot is best for detecting outliers in a numerical feature?",
            options: ["Bar chart", "Pie chart", "Box plot", "Heatmap"],
            answer: 2,
            explanation: "Box plots visually represent the IQR (interquartile range) and display points beyond 1.5×IQR as outliers, making them ideal for outlier detection."
          }
        ]
      },
      {
        id: "evaluation",
        name: "Model Evaluation & Bias-Variance",
        questions: [
          {
            q: "What does a high variance model suffer from?",
            options: ["Underfitting", "Overfitting", "Class imbalance", "Data leakage"],
            answer: 1,
            explanation: "High variance means the model is too complex and memorizes training data (overfitting). It performs well on training but poorly on unseen data."
          },
          {
            q: "Which metric is most appropriate for a highly imbalanced classification dataset?",
            options: ["Accuracy", "F1-Score", "MSE", "R²"],
            answer: 1,
            explanation: "F1-Score balances precision and recall, making it better than accuracy for imbalanced datasets where one class dominates and high accuracy can be misleading."
          }
        ]
      }
    ]
  },
  {
    id: "docker",
    name: "Docker",
    icon: "🐳",
    active: true,
    desc: "Containers, images, Dockerfile, volumes & networking",
    sections: [
      {
        id: "dockerfile",
        name: "Dockerfile",
        questions: [
          {
            q: "Which Docker instruction is used to define the default command that runs when a container starts, but can be easily overridden by command-line arguments?",
            options: ["RUN", "ENTRYPOINT", "CMD", "START"],
            answer: 2,
            explanation: "This provides defaults for an executing container which can be replaced if the user specifies arguments at the command line."
          },
          {
            q: "When building an image for a Python application, why is it considered best practice to use 'python:3.9-slim' instead of 'python:3.9'?",
            options: ["It includes more pre-installed ML libraries like NumPy.", "It is required for GPU support.", "It runs the Python code faster.", "It significantly reduces the image size by excluding unnecessary tools."],
            answer: 3,
            explanation: "Slim images contain only the essential packages to run Python, which reduces storage costs and deployment time."
          },
          {
            q: "Which instruction should you use in a Dockerfile to set an environment variable that your Python script can access via 'os.environ'?",
            options: ["ARG", "SET", "ENV", "VAR"],
            answer: 2,
            explanation: "ENV sets persistent environment variables that are available both during build and at runtime."
          },
          {
            q: "What is the primary benefit of 'Multi-stage builds' for an Al developer?",
            options: ["It enables a single container to run multiple operating systems.", "It allows you to include build-time compilers (like gcc) in one stage and copy only the compiled binaries to a smaller final image.", "It makes the Dockerfile run faster by parallelizing all steps.", "It allows you to train a model in the first stage and deploy it in the second."],
            answer: 1,
            explanation: "This keeps the final image lean and secure by removing heavy build tools that aren't needed at runtime."
          },
          {
            q: "Which of these is the correct way to ensure your Python output (logs) is visible in the Docker console immediately without buffering?",
            options: ["Using the 'EXPOSE 80' instruction.", "Running the container with the '--fast-logs' flag.", "Setting 'ENV PYTHONUNBUFFERED=1' in the Dockerfile.", "Using 'RUN flush python'"],
            answer: 2,
            explanation: "This environment variable forces Python to flush the output streams immediately to STDOUT.."
          },
          {
            q: "Which instruction is preferred for adding a local file to an image when no additional functionality like URL downloading or archive extraction is needed?",
            options: ["COPY", "INSERT", "ADD", "PUSH"],
            answer: 0,
            explanation: "COPY is more transparent and limited than ADD, making it the best practice for simply moving local files into the image."
          },
          {
            q: "In a Dockerfile for a FastAPI model server, what is the effect of using 'WORKDIR /app'?",
            options: ["It limits the container's disk usage to the /app folder.", "It is a metadata label that tells other developers where the code is located.", "It downloads the /app directory from the host machine.", "It creates the directory if it doesn't exist and sets it as the active directory for subsequent instructions."],
            answer: 3,
            explanation: "WORKDIR acts like 'mkdir' and 'cd' combined, ensuring all following RUN, CMD, and ENTRYPOINT commands execute from that path."
          },
          {
            q: "Which environment variable prevents Python from generating •pyc files inside the container, keeping the image clean?",
            options: ["PYTHONUNBUFFERED=1", "PYTHONDONTWRITEBYTECODE=1", "PYTHON_NO_CACHE=true", "PIP_NO_CACHE_DIR=1"],
            answer: 1,
            explanation: "This variable tells Python not to write bytecode files to disk, which is useful in ephemeral container environments."
          },
          {
            q: "Which instruction defines the command that always runs and treats CMD as arguments for that command?",
            options: ["ENTRYPOINT", "RUN", "START", "EXEC"],
            answer: 0,
            explanation: "ENTRYPOINT makes the container run like an executable, where CMD values are passed as parameters to it."
          },
          {
            q: "Which Dockerfile instruction is used to document the internal ports the container listens on?",
            options: ["OPEN", "PORT", "PUBLISH", "EXPOSE"],
            answer: 3,
            explanation: "EXPOSE serves as documentation and metadata between the image builder and the operator."
          },
          {
            q: "What is the purpose of 'HEALTHCHECK' in a Dockerfile?",
            options: ["To check if the container has enough CPU power.", "To tell Docker how to test if the application inside the container is still working correctly.", "To verify that all Python libraries are installed.", "To scan the image for security vulnerabilities."],
            answer: 1,
            explanation: "It allows the Docker engine to see if a process is 'healthy' rather than just 'running'."
          },
          {
            q: "Which instruction is used to provide metadata for your image, such as maintainer info or versioning?",
            options: ["LABEL", "TAG", "METADATA", "INFO"],
            answer: 0,
            explanation: "LABEL allows you to add key-value pairs as metadata to organize your images or record build info."
          }
        ]
      },
      {
        id: "dockercli",
        name: "Docker CLI Commands",
        questions: [
          {
            q: "Which command would you use to view the logs of a running container named 'model_server'?",
            options: ["docker read model_server", "docker inspect model_server", "docker history model_server", "docker logs model__server"],
            answer: 3,
            explanation: "This is the standard command to fetch the STDOUT and STDERR streams from a container."
          },
          {
            q: "You want to map port 8000 on your local machine to port 5000 inside a container. What is the correct flag for 'docker run'?",
            options: ["-port 8000:5000", "-p 5000:8000", "-p 8000:5000", "-m 8000:5000"],
            answer: 2,
            explanation: "This correctly maps the host's port 8000 to the container's internal port 5000."
          },
          {
            q: "You need to run a container in the background so you can continue using your terminal. Which flag do you use?",
            options: ["-it", "-d", "-b", "--background"],
            answer: 1,
            explanation: "The -d (detached) flag runs the container in the background and prints the container ID."
          },
          {
            q: "What is the result of running 'docker system prune'?",
            options: ["It restarts the Docker daemon.", "It deletes all running containers.", "It removes all unused data, including stopped containers, unused networks, and dangling images.", "It updates all your images to the latest version."],
            answer: 2,
            explanation: "Prune is a cleanup command that targets resources not currently associated with a container."
          },
          {
            q: "Which Docker command is used to build an image from a Dockerfile in the current directory and tag it as 'my-model:v1'?",
            options: ["docker build -t my-model:v1 .", "docker tag my-model:v1 .", "docker run --name my-model:v1 .", "docker image create -t my-model:v1 ."],
            answer: 0,
            explanation: "The -t flag allows you to name and tag the image, and the '.' specifies the build context."
          },
          {
            q: "How can you pass a GPU device to a container for model inference using the Docker CLI?",
            options: ["--device gpu0", "--enable-cuda", "-v /dev/nvidia0:/dev/nvidia0", "--gpus all"],
            answer: 3,
            explanation: "The --gpus flag is the standard way to expose host GPUs to a container using the NVIDIA Container Toolkit."
          },
          {
            q: "When using 'docker stop', what signal is first sent to the process inside the container?",
            options: ["SIGSTOP", "SIGKILL", "SIGTERM", "SIGINT"],
            answer: 2,
            explanation: "SIGTERM allows the process to perform cleanup and shut down gracefully."
          },
          {
            q: "Which command allows you to execute an interactive bash shell inside an already running container?",
            options: ["docker open container_id", "docker attach container_id", "docker exec -it container_id bash", "docker run -it container_id bash"],
            answer: 2,
            explanation: "The 'exec' command runs a new command (like bash) within a currently running container session."
          },
          {
            q: "How do you limit a container to use only 512MB of RAM?",
            options: ["--memory 512m", "-limit-mem 512m", "--ram 512m", "ENV MAX_MEMORY=512m"],
            answer: 0,
            explanation: "This flag sets the hard limit for the amount of memory the container can consume."
          },
          {
            q: "Which command shows only the IDs of all running containers?",
            options: ["docker list id", "docker ps -q", "docker inspect --ids", "docker ps -a"],
            answer: 1,
            explanation: "The -q (quiet) flag restricts the output to only display the numeric container IDs."
          },
          {
            q: "Which Docker command shows you the history of changes/layers for a specific image?",
            options: ["docker log", "docker image history", "docker inspect", "docker diff"],
            answer: 1,
            explanation: "This shows the size and creation command for each layer in the image."
          },
          {
            q: "When troubleshooting a Python application that has stopped responding, which command allows you to immediately terminate the container without waiting for a graceful shutdown?",
            options: ["docker kill", "docker stop", "docker rm -f", "docker pause"],
            answer: 0,
            explanation: "This sends a SIGKILL signal, which immediately terminates the main process of the container."
          }
        ]
      },
      {
        id: "configs",
        name: "Docker Configuration Files",
        questions: [
          {
            q: "In a Dockerfile, what is the purpose of the 'dockerignore' file?",
            options: ["To list the Python dependencies that should be ignored.", "To prevent sensitive files like env or large datasets from being sent to the Docker daemon.", "To bypass Docker's layer caching mechanism.", "To stop Docker from running certain commands."],
            answer: 1,
            explanation: "It functions like gitignore, ensuring that unnecessary or private files don't bloat the build context or end up in the image."
          }
        ]
      },
      {
        id: "networks",
        name: "Docker Networks",
        questions: [
          {
            q: "Which of the following is the default network driver for containers on a single host?",
            options: ["Host", "None", "Overlay", "Bridge"],
            answer: 3,
            explanation: "The bridge driver creates a private internal network on the host so containers can communicate."
          },
          {
            q: "You are running a Vector Database in one container and a Python API in another on the same host. Which network driver should you use to allow them to communicate using container names?",
            options: ["Host", "None", "Overlay", "Bridge"],
            answer: 3,
            explanation: "A user-defined bridge network provides automatic service discovery, allowing containers to find each other via their names."
          }
        ]
      },
      {
        id: "cleanep",
        name: "Docker cleanup & deletion",
        questions: [
          {
            q: "What happens to data stored inside a container's writable layer after the container is deleted?",
            options: ["It is permanently lost unless a volume or bind mount was used.", "It is moved to the host's temporary folder.", "It is automatically backed up to Docker Hub.", "It is saved in the Docker image."],
            answer: 0,
            explanation: "Containers are ephemeral; data is only persistent if it is stored in a volume that exists independently of the container lifecycle."
          },
          {
            q: "In a Dockerfile, what is the purpose of the 'dockerignore' file?",
            options: ["To list the Python dependencies that should be ignored.", "To prevent sensitive files like env or large datasets from being sent to the Docker daemon.", "To bypass Docker's layer caching mechanism.", "To stop Docker from running certain commands."],
            answer: 1,
            explanation: "It functions like gitignore, ensuring that unnecessary or private files don't bloat the build context or end up in the image."
          },
          {
            q: "What is a 'dangling' image in Docker?",
            options: ["An image that is currently being uploaded to Docker Hub.", "An image specifically designed for ARM processors.", "An image that has no name or tag, usually created when rebuilding an image with the same name.", "An image that is missing essential layers and cannot run."],
            answer: 2,
            explanation: "These occur when a new build takes over a tag, leaving the old layers without a reference name."
          },
          {
            q: "Which flag is used to automatically remove a container when it exits?",
            options: ["--rm", "--rmi", "--auto-delete", "--cleanup"],
            answer: 0,
            explanation: "This is highly useful for one-off tasks (like model conversion scripts) to prevent accumulating 'dead' containers."
          }
        ]
      },
      {
        id: "storage",
        name: "Docker Storage Concepts - Volumes and Bind Mount",
        questions: [
          {
            q: "If you need to share a specific folder from your laptop with a container so that the container can read and write to it, what should you use?",
            options: ["A Docker Network", "A Docker Image", "The COPY instruction", "A Bind Mount"],
            answer: 3,
            explanation: "Bind mounts link a specific path on the host to a path in the container, making it ideal for development and real-time code updates."
          },
          {
            q: "In a Dockerfile, what is the purpose of the 'dockerignore' file?",
            options: ["To list the Python dependencies that should be ignored.", "To prevent sensitive files like env or large datasets from being sent to the Docker daemon.", "To bypass Docker's layer caching mechanism.", "To stop Docker from running certain commands."],
            answer: 1,
            explanation: "It functions like gitignore, ensuring that unnecessary or private files don't bloat the build context or end up in the image."
          },
          {
            q: "What is the primary difference between a Docker Volume and a Bind Mount?",
            options: ["Bind mounts are encrypted by default.", "Volumes are read-only, while bind mounts are read-write.", "Volumes are faster for AI model training than bind mounts.", "Volumes are stored in a part of the host filesystem managed by Docker; bind mounts can be anywhere."],
            answer: 3,
            explanation: "Both can be read-only or read-write; the difference lies in management and storage location. Volumes are more isolated and managed by the Docker engine, whereas bind mounts depend on the host's directory structure."
          },
          {
            q: "To prevent a memory-intensive model training job from being killed by the Linux Out-Of-Memory (OOM) killer, which flag should you use to set a hard limit of 8GB?",
            options: ["-v 8g", "--max-memory 8g", "-m 8g", "--cpu-quota 8000"],
            answer: 2,
            explanation: "The -m or --memory flag sets the maximum amount of RAM the container can use."
          },
          {
            q: "If you want to ensure that your model's weight files (e.g., .bin or .safetensors) are NOT included in the Docker image during the build process, where should you list them?",
            options: [".gitignore", "requirements.txt", "Dockerfile", ".dockerignore"],
            answer: 3,
            explanation: "This file explicitly tells Docker which local files and directories to exclude from the build context."
          }
        ]
      },
      {
        id: "dockercompose",
        name: "Docker Compose - Multi-container orchestration",
        questions: [
          {
            q: "In Docker Compose, which keyword is used to ensure a database container starts before the Python API container?",
            options: ["wait_for", "order", "links", "depends_on"],
            answer: 3,
            explanation: "This defines the dependency order, ensuring the service listed is started before the dependent service."
          },
          {
            q: "In Docker Compose, what is the default name given to the network created for your services?",
            options: ["host", "bridge_default", "projectname_default", "docker_compose_net"],
            answer: 2,
            explanation: "Compose creates a dedicated network for each project, naming it after the directory/project plus '_default'."
          }
        ]
      },
      {
        id: "dockerhub",
        name: "Docker Hub",
        questions: [
          {
            q: "What happens if you don't include a 'tag' (like :v1) when pulling an image?",
            options: ["Docker will pull the smallest version available.", "The pull command will fail with a 'Missing Tag' error.", "Docker will pull all available versions of that image.", "Docker will pull the version tagged ':latest' by default."],
            answer: 1,
            explanation: "If no tag is specified, the engine assumes the user wants the image version labeled 'latest'."
          }
        ]
      },
      {
        id: "dockerbuild",
        name: "Docker Build",
        questions: [
          {
            q: "Why would an AI engineer use a multi-stage build for a PyTorch application?",
            options: ["To bypass the need for a .dockerignore file.", "To train the model on CPU in stage 1 and GPU in stage 2.", "To use a heavy build environment with compilers to install wheels, then copy only the installed packages to a clean final image.", "To allow multiple users to build the image at the same time."],
            answer: 2,
            explanation: "This results in a production-ready image without the gigabytes of build-time tools."
          }
        ]
      }
    ]
  },
  { id: "dl", name: "Deep Learning", icon: "🧬", active: false, desc: "Neural networks, CNNs, RNNs, transformers & training tricks", sections: [] },
  { id: "llm", name: "LLMs & Transformers", icon: "💬", active: false, desc: "Attention, fine-tuning, RAG, prompt engineering", sections: [] },
  { id: "nlp", name: "NLP", icon: "📝", active: false, desc: "Tokenization, embeddings, text classification, NER", sections: [] },
  { id: "python", name: "Python", icon: "🐍", active: false, desc: "Core Python, OOP, data structures & stdlib", sections: [] },
  { id: "mysql", name: "MySQL", icon: "🗄️", active: false, desc: "Queries, joins, indexing, transactions & optimization", sections: [] },
  { id: "git", name: "GitHub & Git", icon: "🐙", active: false, desc: "Branching, merging, PRs, actions & collaboration", sections: [] },
  { id: "agentic", name: "Agentic AI", icon: "🕵️", active: false, desc: "Agents, tool use, memory, multi-agent systems", sections: [] },
  { id: "mlops", name: "MLOps", icon: "⚙️", active: false, desc: "MLflow, BentoML, model serving & monitoring", sections: [] },
  { id: "vector", name: "Vector DBs", icon: "🔍", active: false, desc: "Embeddings, Pinecone, FAISS, Chroma & ANN", sections: [] },
];

































































