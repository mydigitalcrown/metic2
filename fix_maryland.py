#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys

file_path = r'c:\Users\ASUS\Documents\metic2\src\app\generative-ai-services-in-maryland\page.tsx'

# Read the file with UTF-8 encoding
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# All replacements for Maryland
replacements = [
    # Location names
    ('Ahmedabad', 'Maryland'),
    ('Gujarat', 'Maryland'),
    ('Maninagar', 'Baltimore'),
    ('Vastrapur', 'Annapolis'),
    ('SG Highway', 'Rockville'),
    ('Bodakdev', 'Bethesda'),
    ('Naroda Industrial Area', 'Baltimore Harbor'),
    ('Manchester of the East', 'Free State'),
    ('GIFT City', 'Bethesda, Rockville, Columbia'),
    ('Satellite, Chandkheda, Bodakdev, Navrangpura, Ghatlodia', 'Silver Spring, Gaithersburg, Frederick, Columbia'),
    ('Satellite, Chandkheda, Bodakdev, Navrangpura', 'Silver Spring, Gaithersburg, Frederick'),
    
    # Industries
    ('Textiles & Garments', 'Biotechnology & Life Sciences'),
    ('Pharmaceuticals', 'Cybersecurity & IT'),
    ('Chemicals', 'Aerospace & Defense'),
    ('Diamond & Jewelry', 'Maritime & Port Logistics'),
    ('Food Processing', 'Healthcare & Medical Devices'),
    
    # Other terms
    ('fishing', 'maritime logistics'),
    ('Textile mills', 'biotech facilities'),
    ('Textile operations', 'port operations'),
    ('Textile-driven', 'biotech-driven'),
    ('Textile-manufacturing', 'biotechnology'),
    ('Textiles Generative', 'Biotechnology'),
    ('Manchester of India', 'Biotech Capital'),
    
    # Locale & Currency
    ('en_IN', 'en_US'),
    ('"IND"', '"USD"'),
    ('IN123456789', 'US-MD-123456789'),
    ('open_INgHours', 'openingHours'),
    
    # Coordinates (Ahmedabad to Baltimore)
    ('23.0225', '39.2904'),
    ('72.5714', '-76.6122'),
    ('380001', '21201'),
    
    # Other coordinate formats
    ('35201', '21201'),
    ('32.7794', '39.2904'),
    ('-86.8287', '-76.6122'),
    ('32.3182', '39.2904'),
    ('-86.9023', '-76.6122'),
    
    # Schema fixes
    ('geoRadiIN', 'geoRadius'),
    ('2380001', '200000'),
    
    # Stats
    ('Projects Delivered', 'Businesses Served'),
    ('2100+', '50+'),
    
    # Address
    ('300 Quail Ridge Dr NE', '100 S Charles St'),
    ('ADA', 'Baltimore'),
    ('MI', 'MD'),
    ('49301', '21201'),
    
    # Variable names
    ('const Industries', 'const industries'),
    ('"Industries"', '"industries"'),
]

# Apply all replacements
for old, new in replacements:
    content = content.replace(old, new)

# Write back with UTF-8 encoding
with open(file_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

print("Maryland page fixed successfully!")
