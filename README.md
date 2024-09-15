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
├── gis.ipynb/                  # Classification using U-Net Architecture  
├── Datasets/                    
│   ├── Amora_Shapefile         # Vector layer of Amora Village
│   ├── Godri_Shapefile         # Vector Layer of Godri Village       
│   └── Villages                # Satellite Images of villages
├── README.md                   # This readme file         
