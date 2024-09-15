# Gram-Chitran

# Water Body and City Feature Detection Using Satellite Imagery with U-Net

## Project Overview

This project focuses on detecting and classifying features such as buildings, water bodies, roads, and railways from satellite imagery using computer vision techniques. The model is built using a U-Net architecture for semantic segmentation, applied to satellite images and corresponding masks to identify various features with pixel-level precision.

## Project Features

- **Image Segmentation**: Classifies city features like water bodies, roads, buildings, and railways in satellite images.
- **U-Net Architecture**: Utilizes a modified U-Net model for feature extraction and segmentation.
- **Training and Testing**: Separate data generators for training and testing datasets to ensure robust learning and evaluation.
- **Data Augmentation**: Mechanisms for normalizing and resizing images to improve model performance and generalization.

## Satellite Images
![image](https://github.com/user-attachments/assets/169f057e-29d2-4d56-95d1-850c0debed5d)

<img width="945" alt="Chhatisgarh" src="https://github.com/user-attachments/assets/79202f95-8177-4f21-bcf4-37a7c748a7f5">

## Preprocessed Images
![image](https://github.com/user-attachments/assets/50bd4707-4f25-46ef-817a-22899bcda181)

<img width="898" alt="Godri" src="https://github.com/user-attachments/assets/c2a5a6c8-e7de-4f34-9a95-b4194b822df2">

## Augmented Images
<img width="303" alt="Augmentation" src="https://github.com/user-attachments/assets/dd21b8ad-c933-42bb-abe5-82dd69a47d4e">

## Project Workflow






## Directory Structure

```plaintext
├── gis.ipynb/                  # Classification using U-Net Architecture  
├── Datasets/                    
│   ├── Amora_Shapefile         # Vector layer of Amora Village
│   ├── Godri_Shapefile         # Vector Layer of Godri Village       
│   └── Villages                # Satellite Images of villages
├── README.md                   # This readme file         
