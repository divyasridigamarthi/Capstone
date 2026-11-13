**Hybrid CNN-ViT for Pancreatic Disease Detection from CT Scans**

A capstone project that combines deep learning research (a hybrid Convolutional Neural Network and Vision Transformer for pancreatic CT classification) with a web application prototype (React frontend, FastAPI backend, MySQL database) for uploading scans and viewing results.

Medical disclaimer: this is an academic research prototype. It is not a medical device and must not be used for diagnosis or treatment decisions.

url: https://pancreasscan-ai-fsl.caffeine.xyz/#caffeineAdminToken=5496aa2a6a336b27ce9342459e09db6a6485d1b00b202c363667f9f47777a504

**Overview**

Pancreatic cancer is often found late because early stages cause few symptoms and the changes on CT scans are subtle. Reading these scans is slow and can vary between radiologists.

This project explores an AI-assisted approach:

CNNs capture local features such as texture and edges.

Vision Transformers (ViT) capture global context through self-attention.

A hybrid of both aims to use local detail and global context together.

A web interface lets a user upload a CT scan and view the stored result.

**Research Approach**

Preprocessing: resize to a uniform resolution, min-max intensity normalization (X - Xmin) / (Xmax - Xmin), and augmentation (rotation, horizontal flip, scaling, contrast changes).

**Models compared:**

CNNs: ResNet, DenseNet, EfficientNet, InceptionV3

Transformers: ViT-B/16,DeiT, Swin Transformer 

Proposed: a hybrid CNN-ViT model

Training: transfer learning from pre-trained weights, tuned learning rate, batch size and optimizer, dropout and early stopping.

Evaluation: accuracy, precision, recall and F1-score.

Explainability: gradient-based localization for the CNN and attention maps for the transformer.

**Tech Stack**

**Layer**	            Technology

**Frontend**	        React, axios, JavaScript (inline styles)

**Backend**	          Python, FastAPI, uvicorn

**Database**	        MySQL (mysql-connector-python)

**Machine learning**	TensorFlow / Keras, PyTorch and torchvision, scikit-learn, OpenCV, NumPy, pandas, Matplotlib
