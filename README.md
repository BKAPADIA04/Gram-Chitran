# Gram-Chitran

# Water Body and City Feature Detection Using Satellite Imagery with U-Net

## Project Overview

This project focuses on detecting and classifying features such as buildings, water bodies, roads, and railways from satellite imagery using computer vision techniques. The model is built using a U-Net architecture for semantic segmentation, applied to satellite images and corresponding masks to identify various features with pixel-level precision.

## Project Features

- **Image Segmentation**: Classifies city features like water bodies, roads, buildings, and railways in satellite images.
- **U-Net Architecture**: Utilizes a modified U-Net model for feature extraction and segmentation.
- **Training and Testing**: Separate data generators for training and testing datasets to ensure robust learning and evaluation.
- **Data Augmentation**: Mechanisms for normalizing and resizing images to improve model performance and generalization.

## Directory Structure

```plaintext
├── images/                     # Folder containing satellite images
├── masks/                      # Folder containing corresponding mask images
├── model/                      # Folder for saving the trained model
├── scripts/                    # Python scripts for training, evaluation, and inference
│   ├── train_model.py          # Script for training the model
│   ├── infer.py                # Script for running inference on new images
│   └── visualize_results.py    # Script for visualizing the results
├── README.md                   # This readme file
└── requirements.txt            # List of required Python libraries
