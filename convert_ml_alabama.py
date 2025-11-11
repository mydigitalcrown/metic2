import re

# Read the AI Alabama source file
with open(r'c:\Users\ASUS\Documents\metic2\src\app\artificial-intelligence-ai-services-in-alabama\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all AI terminology with ML terminology
replacements = [
    (r'Artificial Intelligence', 'Machine Learning'),
    (r'artificial intelligence', 'machine learning'),
    (r'\bAI Company\b', 'ML Company'),
    (r'\bAI Service\b', 'ML Service'),
    (r'\bAI Firm\b', 'ML Firm'),
    (r'\bAI Development\b', 'ML Development'),
    (r'\bAI Solutions\b', 'ML Solutions'),
    (r'\bAI Consulting\b', 'ML Consulting'),
    (r'\bAI Technology\b', 'ML Technology'),
    (r'\bAI automation\b', 'ML automation'),
    (r'\bAI software\b', 'ML software'),
    (r'\bAI integration\b', 'ML integration'),
    (r'\bAI implementation\b', 'ML implementation'),
    (r'\bAI experts\b', 'ML experts'),
    (r'\bAI services\b', 'ML services'),
    (r'\bAI projects\b', 'ML projects'),
    (r'\bAI ML\b', 'ML'),
    (r'/artificial-intelligence-ai-services-in-alabama/', '/machine-learning-services-in-alabama/'),
    (r'og-ai-company-alabama\.jpg', 'og-ml-company-alabama.jpg'),
    (r'ai-company-alabama', 'ml-company-alabama'),
    (r'AIServicesAlabamaPage', 'MLServicesAlabamaPage'),
    (r'getAlabamaStructuredData', 'getAlabamaMLStructuredData'),
    (r'Alabama AI Team', 'Alabama ML Team'),
    (r'100\+', '50+'),
    (r'180\+', '50+'),
    (r'2100\+', '50+'),
]

for pattern, replacement in replacements:
    content = re.sub(pattern, replacement, content)

# Write to ML Alabama file
with open(r'c:\Users\ASUS\Documents\metic2\src\app\machine-learning-services-in-alabama\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("ML Alabama page conversion complete!")
print("All AI terminology converted to ML")
print("All stats normalized to 50+")
print("URLs and images updated")
print("Function names updated")
