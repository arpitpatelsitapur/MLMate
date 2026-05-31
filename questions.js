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
          },
          {
            q: "When performing Exploratory Data Analysis (EDA) on a dataset with high cardinality categorical features (e.g., 'User_ID' or 'Zip_Code'), which technique is most effective for visualizing their relationship with a continuous target variable without creating an unreadable chart?",
            options: ["Pie chart of the category distribution", "Box plots of the top N most frequent categories", "Heatmap of the raw categories", "A single scatter plot of all categories vs target"],
            answer: 1,
            explanation: "Focusing on the most frequent categories allows for a legible comparison of distributions and outliers for the most impactful groups."
          },
          {
            q: "You are dealing with a dataset where 30% of the values in a critical feature are missing. The data is determined to be 'Missing at Random' (MAR). Which approach is generally preferred over simple mean imputation to preserve the variance of the dataset?",
            options: ["Zero-filling the missing entries", "Mean imputation", "Iterative Imputation (MICE)", "Dropping rows"],
            answer: 2,
            explanation: "Multivariate Imputation by Chained Equations (MICE) models each feature with missing values as a function of other features, preserving relationships and variance."
          },
          {
            q: "In the context of Feature Engineering, why might you prefer Target Encoding over One-Hot Encoding for a categorical feature with 500 unique levels?",
            options: ["Target encoding increases the dimensionality of the dataset", "Target encoding is immune to overfitting", "Target encoding ignores the relationship with the label", "To avoid the 'Curse of Dimensionality'"],
            answer: 3,
            explanation: "Target encoding maps categories to a single numeric column, preventing the massive sparse matrix that one-hot encoding would create with 500 levels."
          },
          {
            q: "When scaling features for a Support Vector Machine (SVM) or K-Nearest Neighbors (KNN) model, why is Standardization (Z-score normalization) often preferred over Min-Max Scaling if the data contains outliers?",
            options: ["Min-Max Scaling is significantly squeezed by outliers", "Standardization makes the data perfectly normally distributed", "SVMs cannot process negative values produced by standardization", "Standardization bounds the data between 0 and 1"],
            answer: 0,
            explanation: "Min-Max uses the absolute minimum and maximum; if an outlier is very large, it 'squeezes' all normal data points into a very tiny range near 0."
          },
          {
            q: "During EDA, you calculate the Pearson correlation coefficient between two variables and get a value of 0.02. What is the most accurate conclusion?",
            options: ["There is no linear relationship between the variables", "The variables are independent", "There is a strong non-linear relationship", "One variable causes the other to increase slightly"],
            answer: 0,
            explanation: "Pearson correlation measures linear association; a value near zero indicates the absence of a linear trend."
          },
          {
            q: "What is the primary risk of performing feature selection (like selecting the top 10 correlated features) on the entire dataset before splitting it into training and testing sets?",
            options: ["Underfitting", "Reduced feature variance", "Increased computation time", "Data Leakage"],
            answer: 3,
            explanation: "By using the whole dataset, information from the 'future' test set influences which features are chosen, leading to overly optimistic performance estimates."
          },
          {
            q: "In Feature Engineering, what is the purpose of 'Interaction Features'?",
            options: ["To normalize the distribution of skewed data", "To capture the combined effect of two variables that isn't purely additive", "To reduce the number of features in the model", "To automatically handle missing values"],
            answer: 1,
            explanation: "Sometimes the impact of one variable depends on the level of another (e.g., age and exercise levels on health), which interaction terms help model."
          },
          {
            q: "Which visualization is best suited for identifying the presence and distribution of outliers in a single numerical feature?",
            options: ["Bar chart", "Pie chart", "Box plot", "Line chart"],
            answer: 2,
            explanation: "Box plots specifically highlight 'whiskers' and individual points (fliers) that fall outside the interquartile range, making outliers easy to spot."
          },
          {
            q: "When dealing with skewed numerical data (e.g., income), a Log Transformation is often applied. What is a key requirement for the data before applying a standard log(x) transformation?",
            options: ["The data must be scaled between 0 and 1", "All values must be greater than zero", "The feature must be categorical", "The data must already be normally distributed"],
            answer: 1,
            explanation: "The logarithm of zero or negative numbers is undefined in real numbers, so the data must be strictly positive."
          }
        ]
      },
      {
        id: "evaluation",
        name: "Model Evaluation, Cross-Validation & Bias-Variance Tradeoff",
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
          },
          {
            q: "When using multi-stage builds, which command is used to bring a file from a previous stage into the final production image?",
            options: ["ADD --stage=0 /path /dest", "IMPORT /path", "COPY --from=build /path /dest", "RUN move stage1:/path /dest"],
            answer: 2,
            explanation: "The --from flag in the COPY instruction allows you to reference files created in earlier stages of the Dockerfile."
          },
          {
            q: "Which instruction sets the default user for the container to prevent it from running with root privileges?",
            options: ["SUDO", "LOGIN", "CHOWN", "USER"],
            answer: 3,
            explanation: "The USER instruction sets the UID or username used to run the subsequent instructions and the container itself."
          },
          {
            q: "To avoid installing unnecessary development tools in your final image, you should use which type of base image for a pure Python deployment?",
            options: ["python:3.11-alpine", "python:3.11-slim", "python:3.11-full", "python:3.11-windowsservercore"],
            answer: 1,
            explanation: "Slim images are Debian-based (offering high compatibility) but stripped of extra packages, making them ideal for production."
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
          },
          {
            q: "Which command would you use to see the amount of CPU and Memory currently being consumed by all running containers in real-time?",
            options: ["docker top", "docker stats", "docker inspect", "docker ps"],
            answer: 1,
            explanation: "This command provides a live stream of resource usage statistics for your containers."
          },
          {
            q: "In a Dockerfile, if you use 'ENTRYPOINT ['python', 'app.py']' and then run 'docker run my-image --debug', what happens?",
            options: ["The '--debug' flag replaces 'python app.py' entirely.", "The container ignored the flag and runs 'python app.py' normally.", "The container fails to start because '--debug' is not an image.", "The '--debug' flag is passed as an argument to 'python app.py'."],
            answer: 3,
            explanation: "The exec form of ENTRYPOINT treats arguments passed to 'docker run' as parameters for the command."
          },
          {
            q: "How do you view which files have changed in a container's writable layer compared to its original image?",
            options: ["docker history", "docker inspect", "docker logs", "docker diff"],
            answer: 3,
            explanation: "This command lists the files and directories that have been Added, Changed, or Deleted in the container."
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
          },
          {
            q: "Which Docker command is used to upload a local image to a registry like Docker Hub or Google Container Registry?",
            options: ["docker commit", "docker push", "docker upload", "docker send"],
            answer: 1,
            explanation: "Push is the standard command to send an image from your local machine to a remote registry."
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
          },
          {
            q: "You have updated your code and want to rebuild the image, but you noticed it's taking a long time because it's re-installing all pip packages. What is the most likely cause?",
            options: ["You didn't use the '--no-cache' flag during build.", "Pip doesn't support Docker caching.", "The Docker daemon is running out of disk space.", "You are COPYing all files (COPY . .) before running 'pip install'."],
            answer: 3,
            explanation: "Changing any file in the build context invalidates the cache for that step and all subsequent steps, so the code change forces a re-install."
          }
        ]
      }
    ]
  },
  {
    id: "dl",
    name: "Deep Learning",
    icon: "🧬",
    active: true,
    desc: "Neural networks, CNNs, RNNs, transformers & training tricks",
    sections: [
      {
        id: "dl_fundamentals",
        name: "Neural Network Fundamentals",
        questions: [
          {
            q: "Why is the ReLU activation function generally preferred over Sigmoid in the hidden layers of deep neural networks?",
            options: ["It bounds the output between 0 and 1.", "It prevents the vanishing gradient problem for positive values.", "It is infinitely differentiable.", "It forces the network to learn non-linear patterns faster by outputting negative numbers."],
            answer: 1,
            explanation: "ReLU (Rectified Linear Unit) returns x if x > 0, and 0 otherwise. Because its derivative is 1 for positive values, it doesn't squash gradients down to zero, helping mitigate the vanishing gradient problem."
          },
          {
            q: "What is the primary mathematical algorithm used during backpropagation to compute gradients?",
            options: ["The Chain Rule of Calculus", "Principal Component Analysis (PCA)", "The Pythagorean Theorem", "K-Means Clustering"],
            answer: 0,
            explanation: "Backpropagation uses the chain rule to recursively calculate the gradient of the loss function with respect to each weight in the network."
          },
          {
            q: "In a multi-class classification problem, which activation function is typically used in the final output layer?",
            options: ["Tanh", "ReLU", "Softmax", "Leaky ReLU"],
            answer: 2,
            explanation: "Softmax normalizes the output of a network into a probability distribution consisting of K probabilities proportional to the exponentials of the input numbers."
          },
          {
            q: "What is the difference between an 'epoch' and a 'batch' in deep learning training?",
            options: ["A batch is the entire dataset; an epoch is a single sample.", "An epoch is one complete pass through the entire training dataset; a batch is a subset of the dataset processed before updating weights.", "They are the exact same thing.", "An epoch measures time, while a batch measures memory size."],
            answer: 1,
            explanation: "An epoch means the model has seen all training data once. A batch is the number of samples processed together to compute a single gradient update."
          },
          {
            q: "Which loss function is the standard choice for binary classification tasks?",
            options: ["Mean Squared Error (MSE)", "Categorical Cross-Entropy", "Binary Cross-Entropy (Log Loss)", "Huber Loss"],
            answer: 2,
            explanation: "Binary Cross-Entropy compares each of the predicted probabilities to actual class output (0 or 1), heavily penalizing predictions that are confident but wrong."
          }
        ]
      },
      {
        id: "cnn",
        name: "Convolutional Neural Networks (CNNs)",
        questions: [
          {
            q: "What is the primary purpose of a Pooling layer (like Max Pooling) in a CNN?",
            options: ["To increase the number of features.", "To reduce the spatial dimensions of the input, making the model more translation invariant and computationally efficient.", "To add non-linearity to the network.", "To prevent overfitting by randomly dropping neurons."],
            answer: 1,
            explanation: "Pooling layers downsample feature maps, reducing the number of parameters and helping the network recognize features regardless of their exact location."
          },
          {
            q: "What does the 'stride' parameter control in a convolutional layer?",
            options: ["The size of the filter matrix.", "The number of filters applied to the input.", "The step size the filter takes as it moves across the input image.", "The amount of padding added to the borders of the image."],
            answer: 2,
            explanation: "Stride determines how many pixels the kernel shifts at each step. A larger stride results in a smaller output feature map."
          },
          {
            q: "If you set padding='same' in a convolutional layer with a stride of 1, what happens to the output dimensions?",
            options: ["The output dimensions are exactly half the input dimensions.", "The output dimensions match the input dimensions.", "The output dimensions are reduced by the filter size minus one.", "The output dimensions are doubled."],
            answer: 1,
            explanation: "'Same' padding automatically adds zero-padding to the edges of the input so that the spatial dimensions of the output feature map match the input."
          },
          {
            q: "What is a 1x1 convolution primarily used for in architectures like Inception or ResNet?",
            options: ["To detect large shapes like circles and squares.", "To drastically increase the spatial resolution of the image.", "To perform dimensionality reduction along the channel depth.", "To replace fully connected layers entirely."],
            answer: 2,
            explanation: "A 1x1 convolution acts as a pixel-wise fully connected layer across channels, allowing for the reduction (or increase) of the number of feature maps/channels without altering spatial dimensions."
          },
          {
            q: "What does the term 'Receptive Field' refer to in the context of CNNs?",
            options: ["The area of the original input image that influences a specific neuron's activation.", "The size of the final fully connected layer.", "The range of values output by the activation function.", "The number of bounding boxes a YOLO model predicts."],
            answer: 0,
            explanation: "As you go deeper into a CNN, each neuron in a feature map is affected by a larger and larger patch of the original input image; this patch is its receptive field."
          }
        ]
      },
      {
        id: "rnn",
        name: "RNNs & Sequence Models",
        questions: [
          {
            q: "Which technique is most commonly used to solve the 'Exploding Gradient' problem in deep Recurrent Neural Networks (RNNs)?",
            options: ["Increasing the learning rate", "Gradient Clipping", "Removing the bias terms", "Using the Sigmoid activation function everywhere"],
            answer: 1,
            explanation: "Gradient clipping forces the gradient vector to a maximum threshold if it exceeds a certain limit, preventing the weights from receiving massive, destabilizing updates."
          },
          {
            q: "In a Long Short-Term Memory (LSTM) network, what is the role of the 'Forget Gate'?",
            options: ["To decide what new information to add to the cell state.", "To output the final prediction for the current time step.", "To decide what information should be thrown away or kept from the previous cell state.", "To randomly drop out neurons to prevent overfitting."],
            answer: 2,
            explanation: "The forget gate looks at the previous hidden state and current input, and outputs a number between 0 and 1 for each number in the cell state, where 0 means 'completely forget' and 1 means 'completely keep'."
          },
          {
            q: "How does a Gated Recurrent Unit (GRU) differ structurally from an LSTM?",
            options: ["GRUs have no memory gates at all.", "GRUs merge the cell state and hidden state, and have only two gates (reset and update).", "GRUs require twice as many parameters as LSTMs.", "GRUs can only process data bidirectionally."],
            answer: 1,
            explanation: "GRUs are a simplified version of LSTMs. They combine the forget and input gates into a single 'update gate' and merge the cell state with the hidden state."
          },
          {
            q: "In training sequence-to-sequence models, what is 'Teacher Forcing'?",
            options: ["Having a larger 'teacher' model train a smaller 'student' model.", "Using the actual ground truth sequence from the training dataset as input for the next time step, instead of the model's own previous prediction.", "Manually updating the weights based on expert intuition.", "Forcing the model to output a specific token at the beginning of generation."],
            answer: 1,
            explanation: "Teacher forcing stabilizes and speeds up training by feeding the true previous target token to the decoder, preventing early mistakes from compounding throughout the sequence."
          },
          {
            q: "Why do standard RNNs struggle with long sequences?",
            options: ["They consume too much disk space.", "They suffer from the vanishing gradient problem, making it hard to carry information across many time steps.", "They process data in parallel, which breaks temporal logic.", "They cannot use embedding layers."],
            answer: 1,
            explanation: "During backpropagation through time (BPTT), gradients are continuously multiplied by the weight matrix. If weights are small, gradients vanish, and the network 'forgets' long-term dependencies."
          }
        ]
      },
      {
        id: "dl_optimization",
        name: "Optimization & Regularization",
        questions: [
          {
            q: "How does Dropout act as a regularizer during neural network training?",
            options: ["It forces the weights to be exactly zero by applying a penalty.", "It randomly ignores a subset of neurons during each forward/backward pass, preventing complex co-adaptations.", "It standardizes the input features.", "It stops training early if the validation loss increases."],
            answer: 1,
            explanation: "By randomly dropping neurons, the network cannot rely on any single node, forcing it to learn more robust features that generalize better."
          },
          {
            q: "What makes the Adam optimizer different from standard Stochastic Gradient Descent (SGD)?",
            options: ["Adam uses a static learning rate for all parameters.", "Adam calculates the second derivative (Hessian) of the loss.", "Adam computes adaptive learning rates for each parameter based on estimates of first and second moments of the gradients.", "Adam can only be used for CNNs."],
            answer: 2,
            explanation: "Adam combines the benefits of Momentum (first moment, moving average of gradients) and RMSProp (second moment, moving average of squared gradients) for efficient, adaptive parameter updates."
          },
          {
            q: "What is the primary benefit of Batch Normalization?",
            options: ["It increases the dataset size.", "It normalizes the inputs to a layer for each mini-batch, reducing internal covariate shift and allowing for higher learning rates.", "It compresses the model size by removing weights.", "It generates new labels for unsupervised data."],
            answer: 1,
            explanation: "By keeping the mean and variance of layer inputs stable, Batch Normalization smooths the optimization landscape, drastically speeding up convergence."
          },
          {
            q: "Which regularization technique tends to produce sparse weight matrices (many weights forced to exactly zero)?",
            options: ["L2 Regularization (Ridge)", "Dropout", "Data Augmentation", "L1 Regularization (Lasso)"],
            answer: 3,
            explanation: "L1 regularization adds the absolute value of weights to the loss function. Its geometry inherently pushes less important feature weights to exactly zero, performing implicit feature selection."
          },
          {
            q: "What is 'Early Stopping' in the context of deep learning?",
            options: ["Halting the CPU when it gets too hot.", "Stopping the data preprocessing pipeline early.", "Monitoring the validation metric and stopping training when it begins to degrade, to prevent overfitting.", "A technique to stop the gradient from vanishing."],
            answer: 2,
            explanation: "Early stopping prevents the model from over-optimizing on the training data by stopping the training loop once performance on a hold-out validation set stops improving."
          }
        ]
      }
    ]
  },
  {
    id: "llm",
    name: "LLMs & Transformers",
    icon: "💬",
    active: true,
    desc: "Attention, fine-tuning, RAG, prompt engineering",
    sections: [
      {
        id: "transformer_arch",
        name: "Transformer Architecture",
        questions: [
          {
            q: "What is the core mathematical mechanism that allows Transformers to process sequences without recurrence?",
            options: ["Long Short-Term Memory", "Self-Attention", "Convolutional Filters", "Markov Chains"],
            answer: 1,
            explanation: "Self-Attention computes a weighted average of all words in a sequence for every word, allowing the model to capture context and dependencies regardless of distance."
          },
          {
            q: "Since Transformers process all tokens in parallel, how do they understand word order?",
            options: ["They rely on standard recurrent loops.", "They process words one by one.", "They use Positional Encodings added to the input embeddings.", "They use a specialized sorting algorithm."],
            answer: 2,
            explanation: "Positional encodings inject information about the relative or absolute position of the tokens into the sequence, giving the model a sense of order."
          },
          {
            q: "Why do Transformers use 'Multi-Head' attention instead of a single attention head?",
            options: ["To allow the model to jointly attend to information from different representation subspaces at different positions.", "To decrease the parameter count.", "To compute gradients faster.", "To allow it to process images and text simultaneously."],
            answer: 0,
            explanation: "Different heads can learn to focus on different aspects of language (e.g., one head for syntax, another for coreference), creating a richer representation."
          },
          {
            q: "Which family of models utilizes a 'Decoder-Only' architecture?",
            options: ["BERT", "T5", "BART", "GPT (Generative Pre-trained Transformer)"],
            answer: 3,
            explanation: "Unlike BERT (Encoder-only) or T5 (Encoder-Decoder), the GPT series relies solely on the Transformer Decoder stack, making it highly effective for autoregressive text generation."
          },
          {
            q: "What is the 'KV Cache' used for during LLM inference?",
            options: ["Caching prompts to save network bandwidth.", "Storing previously computed Key and Value vectors to avoid recomputing them for every new token generated.", "Storing the model weights in VRAM.", "A database for Retrieval-Augmented Generation."],
            answer: 1,
            explanation: "In autoregressive generation, past tokens don't change. The KV cache stores their attention projections, saving massive amounts of compute at the cost of VRAM."
          },
          {
            q: "When adjusting generation parameters, what happens when you set the 'Temperature' closer to 0?",
            options: ["The output becomes completely random.", "The model refuses to answer.", "The output becomes more deterministic and focused on the highest probability tokens.", "The model generates text much faster."],
            answer: 2,
            explanation: "Lower temperature scales the logits before the softmax layer, exaggerating differences in probabilities and causing the model to almost always pick the most likely next word."
          }
        ]
      },
      {
        id: "llm_finetuning",
        name: "Fine-Tuning & Alignment",
        questions: [
          {
            q: "What does LoRA (Low-Rank Adaptation) do to make fine-tuning large models highly efficient?",
            options: ["It trains only the biases of the network.", "It freezes the pre-trained weights and injects trainable rank decomposition matrices into the layers.", "It quantizes the model to 1-bit precision.", "It deletes half of the transformer layers."],
            answer: 1,
            explanation: "By using low-rank matrices, LoRA dramatically reduces the number of trainable parameters (often by 10,000x), allowing fine-tuning of massive models on consumer GPUs."
          },
          {
            q: "What is the primary goal of RLHF (Reinforcement Learning from Human Feedback)?",
            options: ["To pre-train the model on a larger corpus of text.", "To teach the model how to play video games.", "To align the model's outputs with human preferences, such as helpfulness and harmlessness.", "To increase the context window size."],
            answer: 2,
            explanation: "RLHF uses a reward model trained on human rankings to update the LLM via reinforcement learning (usually PPO), discouraging toxic outputs and encouraging helpful ones."
          },
          {
            q: "What is the difference between QLoRA and standard LoRA?",
            options: ["QLoRA uses a Quantum computer.", "QLoRA fine-tunes only the Query matrices in attention.", "QLoRA loads the base model in 4-bit precision to save memory while training LoRA adapters.", "QLoRA is only for computer vision."],
            answer: 2,
            explanation: "QLoRA combines model quantization (reducing the precision of the frozen base model weights) with LoRA, enabling the fine-tuning of massive models on a single GPU."
          },
          {
            q: "What is 'Catastrophic Forgetting' in the context of LLM fine-tuning?",
            options: ["When the server crashes during training and deletes the weights.", "When fine-tuning on a new, narrow task causes the model to lose its general knowledge or abilities from pre-training.", "When the prompt is too long and the model forgets the beginning.", "When the KV cache gets cleared automatically."],
            answer: 1,
            explanation: "Because weights are aggressively updated to minimize loss on the new dataset, the model can 'forget' how to do tasks it previously knew unless precautions (like mixing datasets) are taken."
          },
          {
            q: "What is 'Instruction Tuning'?",
            options: ["Tuning the CPU instructions for faster inference.", "Fine-tuning a base model on datasets formatted as explicit commands or questions paired with the desired responses.", "Teaching the model to write assembly code.", "Aligning the model strictly using reward models without data."],
            answer: 1,
            explanation: "Instruction tuning transforms a raw next-word predictor (Base model) into an assistant that can follow user commands and formats (Instruct model)."
          }
        ]
      },
      {
        id: "prompt_engineering",
        name: "Prompt Engineering",
        questions: [
          {
            q: "What is 'Chain of Thought' (CoT) prompting?",
            options: ["Providing the model with multiple examples of inputs and outputs.", "Prompting the model to 'think step-by-step' or providing an example of the intermediate reasoning steps before the final answer.", "Linking multiple LLMs together in a pipeline.", "Forcing the model to output a Python script."],
            answer: 1,
            explanation: "CoT encourages the model to break down complex problems into logical steps, drastically improving performance on math, logic, and reasoning tasks."
          },
          {
            q: "What distinguishes 'Few-Shot' prompting from 'Zero-Shot' prompting?",
            options: ["Few-shot is for small models; zero-shot is for large models.", "Few-shot includes one or more input-output examples in the prompt to demonstrate the task; zero-shot includes none.", "Few-shot requires updating the model's weights.", "Few-shot uses images; zero-shot uses text."],
            answer: 1,
            explanation: "By providing a 'few' examples (shots), you guide the model's style, format, and reasoning process without actually fine-tuning its weights."
          },
          {
            q: "How does Top-p (Nucleus) sampling differ from Top-k sampling?",
            options: ["Top-p is used for training, Top-k is for inference.", "Top-k selects from the k most likely tokens; Top-p selects from the smallest set of tokens whose cumulative probability exceeds p.", "Top-p is much faster than Top-k.", "They are exactly the same concept."],
            answer: 1,
            explanation: "Nucleus sampling dynamically adjusts the number of token options based on the probability distribution. If the top 2 tokens make up 95% of the probability, Top-p (0.95) only considers those 2."
          },
          {
            q: "What is a 'Hallucination' in the context of LLMs?",
            options: ["When the UI glitches while rendering text.", "When the model generates text that is grammatically correct and sounds plausible but is factually incorrect or ungrounded.", "When the model outputs text in a different language.", "When the attention mechanism attends to future tokens."],
            answer: 1,
            explanation: "LLMs are probabilistic word predictors, not databases. They can confidently invent facts, citations, or URLs that do not exist if they lack the knowledge."
          }
        ]
      },
      {
        id: "rag",
        name: "Retrieval-Augmented Generation (RAG)",
        questions: [
          {
            q: "What is the primary motivation for implementing a RAG architecture?",
            options: ["To train an LLM from scratch faster.", "To reduce hallucinations by grounding the LLM's response in factually retrieved external documents.", "To reduce the cost of API calls by caching responses.", "To make the LLM completely open-source."],
            answer: 1,
            explanation: "RAG retrieves relevant information from a database and injects it into the prompt, allowing the LLM to synthesize an answer based on specific, accurate data rather than relying purely on internal knowledge."
          },
          {
            q: "In a typical RAG pipeline, what is 'Chunking'?",
            options: ["Breaking down a user prompt into multiple smaller prompts.", "Splitting large source documents into smaller, manageable text segments before generating embeddings.", "Combining multiple small LLMs into a 'chunk'.", "Removing stop words from the context."],
            answer: 1,
            explanation: "Because embedding models and LLMs have context limits, large documents must be split into chunks (e.g., 500 words each) to be indexed and retrieved effectively."
          },
          {
            q: "Why are Cross-Encoders often used as a 'reranker' in advanced RAG pipelines?",
            options: ["They generate vectors 10x faster than Bi-Encoders.", "They pass both the query and document through the transformer simultaneously, allowing for rich cross-attention and highly accurate relevance scoring.", "They don't require an LLM to generate the final response.", "They compress the vector database size."],
            answer: 1,
            explanation: "While Bi-Encoders are fast and great for initial retrieval (Vector DB), Cross-Encoders are computationally heavy but much more accurate at determining if a specific chunk actually answers the query."
          },
          {
            q: "What is the 'Lost in the Middle' phenomenon observed in LLMs dealing with large contexts?",
            options: ["The LLM loses its connection to the internet mid-generation.", "The LLM accurately extracts information at the very beginning or end of a long prompt but struggles to recall facts hidden in the middle.", "The embedding vectors become corrupted in the database.", "The model stops generating halfway through a sentence."],
            answer: 1,
            explanation: "Research shows that LLMs have a 'U-shaped' attention span over long contexts, degrading significantly when the relevant information is buried in the middle of a massive RAG payload."
          },
          {
            q: "What is the difference between Dense Retrieval and Sparse Retrieval (like BM25) in a RAG system?",
            options: ["Dense uses semantic embeddings to find meaning; Sparse uses exact keyword matching and frequencies.", "Dense uses keyword matching; Sparse uses embeddings.", "Dense is for images; Sparse is for text.", "Dense retrieval requires no database."],
            answer: 0,
            explanation: "Sparse retrieval (BM25, TF-IDF) looks for exact word matches. Dense retrieval (Vector Embeddings) understands synonyms and semantic meaning. Many modern RAGs use 'Hybrid Search' to combine both."
          }
        ]
      }
    ]
  },
  {
    id: "nlp",
    name: "Natural Language Processing (NLP)",
    icon: "📝",
    active: true,
    desc: "Tokenization, embeddings, text classification, NER",
    sections: [
      {
        id: "text_processing",
        name: "Text Processing & Tokenization",
        questions: [
          {
            q: "What is the primary difference between Stemming and Lemmatization?",
            options: ["Stemming requires a dictionary lookup, while Lemmatization does not.", "Lemmatization simply chops off word endings, while Stemming reduces words to their valid linguistic base (lemma).", "Stemming forcefully chops off word endings (e.g., 'caring' -> 'car'), while Lemmatization uses linguistic rules to find the valid root word (e.g., 'caring' -> 'care').", "They are exactly the same algorithm."],
            answer: 2,
            explanation: "Stemming is a crude heuristic process. Lemmatization is more advanced, analyzing vocabulary and morphology to return a proper dictionary word."
          },
          {
            q: "In the TF-IDF algorithm, what does 'IDF' (Inverse Document Frequency) achieve?",
            options: ["It increases the weight of words that appear frequently in a specific document.", "It penalizes common words that appear across many documents (like 'the' or 'and'), reducing their weight.", "It calculates the total number of words in a document.", "It translates foreign words to English."],
            answer: 1,
            explanation: "IDF lowers the weight of globally frequent terms and raises the weight of rare terms, helping identify the unique, important words that characterize a specific document."
          },
          {
            q: "How does Byte-Pair Encoding (BPE) build its vocabulary?",
            options: ["By using a predefined dictionary of 50,000 English words.", "By splitting text exclusively on whitespace and punctuation.", "By converting all text to ASCII numerical codes.", "By iteratively merging the most frequently occurring adjacent pairs of characters or subwords until a target vocabulary size is reached."],
            answer: 3,
            explanation: "BPE is a subword tokenization algorithm used by models like GPT. It starts with single characters and merges common sequences, allowing it to handle rare words and avoid 'Out of Vocabulary' errors."
          },
          {
            q: "What is the purpose of removing 'Stop Words' in traditional NLP pipelines?",
            options: ["To remove punctuation and numbers.", "To eliminate highly common words (e.g., 'is', 'at', 'which') that carry little distinct meaning, reducing dimensionality.", "To stop the model from training too long.", "To remove toxic or offensive language."],
            answer: 1,
            explanation: "In traditional tasks like topic modeling or TF-IDF, stop words add noise and computational overhead without providing predictive value."
          },
          {
            q: "What does 'OOV' stand for in NLP?",
            options: ["Object Oriented Vector", "Out Of Vocabulary", "Order Of Verification", "Optimized Output Value"],
            answer: 1,
            explanation: "Out Of Vocabulary refers to words that appear in the testing data or real-world usage but were not present in the model's training dictionary."
          }
        ]
      },
      {
        id: "word_embeddings",
        name: "Word Embeddings",
        questions: [
          {
            q: "How does the Word2Vec 'Skip-Gram' architecture learn word embeddings?",
            options: ["It predicts a target word given its surrounding context words.", "It predicts the surrounding context words given a single target word.", "It factorizes a global word co-occurrence matrix.", "It uses character n-grams to form word vectors."],
            answer: 1,
            explanation: "Skip-gram takes a focus word and tries to predict the words appearing around it. (CBOW, the other Word2Vec architecture, does the exact opposite)."
          },
          {
            q: "Which embedding model was developed by Stanford and generates vectors by leveraging global word co-occurrence statistics across a corpus?",
            options: ["Word2Vec", "FastText", "GloVe (Global Vectors)", "ELMo"],
            answer: 2,
            explanation: "GloVe constructs a massive word-context co-occurrence matrix from the corpus and factorizes it, combining the benefits of local context windows and global matrix factorization."
          },
          {
            q: "What is the main advantage of FastText over standard Word2Vec?",
            options: ["FastText is based on transformers.", "FastText represents words as bags of character n-grams, allowing it to generate embeddings for misspelled or out-of-vocabulary words.", "FastText trains in O(1) time complexity.", "FastText does not require any training data."],
            answer: 1,
            explanation: "By breaking words into sub-parts (e.g., 'apple' -> '<ap', 'app', 'ppl', 'ple>'), FastText can construct a vector for a completely unseen word based on its recognizable morphemes."
          },
          {
            q: "What is the key difference between 'Static' embeddings (like Word2Vec) and 'Contextual' embeddings (like BERT)?",
            options: ["Static embeddings are integers; Contextual are floats.", "Static embeddings assign one fixed vector to a word regardless of context; Contextual embeddings change the vector based on the surrounding sentence.", "Contextual embeddings only work on punctuation.", "Static embeddings are much larger in size."],
            answer: 1,
            explanation: "In Word2Vec, the word 'bank' has the exact same vector whether it's a 'river bank' or 'bank account'. BERT dynamically generates a different vector depending on the sentence."
          },
          {
            q: "Which mathematical metric is most commonly used to calculate the similarity between two word embedding vectors?",
            options: ["Euclidean Distance", "Manhattan Distance", "Cosine Similarity", "Jaccard Index"],
            answer: 2,
            explanation: "Cosine similarity measures the cosine of the angle between two vectors. It is preferred over Euclidean distance because it normalizes for vector length, focusing purely on the 'direction' (meaning)."
          }
        ]
      },
      {
        id: "nlp_tasks",
        name: "NLP Tasks & Metrics",
        questions: [
          {
            q: "What is the objective of Named Entity Recognition (NER)?",
            options: ["To translate proper nouns to another language.", "To locate and classify entities in text into predefined categories such as Person, Organization, Location, or Date.", "To determine the emotional tone of a sentence.", "To generate names for fictional characters."],
            answer: 1,
            explanation: "NER is an information extraction task that scans unstructured text and tags specific noun phrases with their appropriate entity class."
          },
          {
            q: "Which metric is the standard for evaluating Machine Translation systems by measuring n-gram overlap with a human reference?",
            options: ["ROUGE", "F1-Score", "BLEU (Bilingual Evaluation Understudy)", "Perplexity"],
            answer: 2,
            explanation: "BLEU calculates the precision of n-grams (1-grams to 4-grams) between the machine's translation and one or more high-quality human reference translations."
          },
          {
            q: "Unlike BLEU, which is precision-focused, which metric is commonly used for evaluating Text Summarization because it focuses heavily on Recall?",
            options: ["ROUGE (Recall-Oriented Understudy for Gisting Evaluation)", "Accuracy", "METEOR", "WER (Word Error Rate)"],
            answer: 0,
            explanation: "ROUGE measures how much of the human reference summary is captured by the model's generated summary, making it ideal for checking if key information was omitted."
          },
          {
            q: "What does Part-Of-Speech (POS) Tagging do?",
            options: ["It identifies sentences as positive, negative, or neutral.", "It labels every word in a sentence with its grammatical role, such as noun, verb, adjective, or adverb.", "It parses the syntax tree of a paragraph.", "It corrects spelling mistakes."],
            answer: 1,
            explanation: "POS tagging assigns grammatical tags to words based on both their definition and their context within the sentence."
          },
          {
            q: "In Sentiment Analysis, what does 'Polarity' refer to?",
            options: ["The length of the document.", "Whether the text expresses a positive, negative, or neutral opinion.", "The geographical location of the author.", "The complexity of the vocabulary used."],
            answer: 1,
            explanation: "Polarity measures the emotion expressed in text, typically ranging from -1 (highly negative) to +1 (highly positive)."
          }
        ]
      },
      {
        id: "sequence_models",
        name: "Traditional Sequence Models",
        questions: [
          {
            q: "What does the 'Markov Assumption' state in the context of sequence modeling?",
            options: ["The future state is completely independent of all past and current states.", "The probability of the next state depends only on the current state (or a fixed number of previous states), not on the entire history.", "All states in a sequence have an equal probability.", "The sequence must be infinite."],
            answer: 1,
            explanation: "The Markov assumption simplifies sequence modeling by cutting off the historical dependency, assuming that the current state encapsulates everything needed to predict the next state."
          },
          {
            q: "Which algorithm is used in Hidden Markov Models (HMMs) to find the most probable sequence of hidden states given an sequence of observations?",
            options: ["K-Means", "The Viterbi Algorithm", "Dijkstra's Algorithm", "Apriori"],
            answer: 1,
            explanation: "The Viterbi algorithm uses dynamic programming to efficiently calculate the most likely path of hidden states (e.g., POS tags) that generated the observed sequence of words."
          },
          {
            q: "How does a Conditional Random Field (CRF) differ from a Hidden Markov Model (HMM) for tasks like NER?",
            options: ["CRF is a generative model; HMM is a discriminative model.", "CRF models the conditional probability P(Y|X) directly, allowing it to easily incorporate complex, overlapping features of the observation sequence.", "CRFs cannot be used for sequence tagging.", "HMMs are much slower to train than CRFs."],
            answer: 1,
            explanation: "Unlike HMMs which are generative (modeling joint probability P(X,Y)), CRFs are discriminative. This means CRFs don't assume the observation features are independent, allowing for much richer feature engineering."
          },
          {
            q: "What is an N-gram Language Model primarily trying to estimate?",
            options: ["The number of words in a sentence.", "The probability of the next word in a sequence given the previous N-1 words.", "The grammatical correctness of a sentence.", "The sentiment of a paragraph."],
            answer: 1,
            explanation: "An N-gram model calculates the conditional probability of a word based purely on the frequency of the preceding N-1 words seen in its training corpus."
          },
          {
            q: "In language modeling, what does 'Perplexity' measure?",
            options: ["How confused a human reader is by the text.", "How well a probability distribution or language model predicts a sample (lower perplexity means a better model).", "The number of OOV words in a text.", "The training time of a transformer."],
            answer: 1,
            explanation: "Perplexity is the exponentiated average negative log-likelihood of a sequence. A model with low perplexity assigns high probability to the test set, meaning it is 'less surprised' by the true data."
          }
        ]
      }
    ]
  },
  { id: "python", name: "Python", icon: "🐍", active: false, desc: "Core Python, OOP, data structures & stdlib", sections: [] },
  { id: "mysql", name: "MySQL", icon: "🗄️", active: false, desc: "Queries, joins, indexing, transactions & optimization", sections: [] },
  { id: "git", name: "GitHub & Git", icon: "🐙", active: false, desc: "Branching, merging, PRs, actions & collaboration", sections: [] },
  { id: "agentic", name: "Agentic AI", icon: "🕵️", active: false, desc: "Agents, tool use, memory, multi-agent systems", sections: [] },
  { id: "mlops", name: "MLOps", icon: "⚙️", active: false, desc: "MLflow, BentoML, model serving & monitoring", sections: [] },
  { id: "vector", name: "Vector DBs", icon: "🔍", active: false, desc: "Embeddings, Pinecone, FAISS, Chroma & ANN", sections: [] },
];


































