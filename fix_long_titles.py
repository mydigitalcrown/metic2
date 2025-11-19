import os
import re

# Pages that need title fixes (over 60 chars)
pages_to_fix = [
    # Mentioned by user
    {
        "path": "src/app/about/page.tsx",
        "old": 'title: "About Metic AI | Leading Artificial Intelligence Company - Our Story & Mission"',
        "new": 'title: "About Metic AI | Leading AI Company - Our Story"'
    },
    {
        "path": "src/app/ai-integration-and-deployment/page.tsx",
        "old": 'title: "AI Integration and Development Services Near Me | #1 Local AI Company - Metic.ai"',
        "new": 'title: "AI Integration Services Near Me | #1 AI - Metic.ai"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-ahmedabad/page.tsx",
        "old": 'title: "Artificial Intelligence Company In Ahmedabad | #1 AI Company In Ahmedabad - Metic.ai"',
        "new": 'title: "#1 AI Company In Ahmedabad | AI Services - Metic.ai"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-colorado/page.tsx",
        "old": 'title: "Artificial Intelligence Company In Colorado | #1 AI Company In Colorado - Metic.ai"',
        "new": 'title: "#1 AI Company In Colorado | AI Services - Metic.ai"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-connecticut/page.tsx",
        "old": 'title: "AI Company In Connecticut | #1 Artificial Intelligence Company In Connecticut"',
        "new": 'title: "#1 AI Company In Connecticut | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-florida/page.tsx",
        "old": 'title: "Artificial Intelligence Company In Florida | #1 AI Company In Florida - Metic.ai"',
        "new": 'title: "#1 AI Company In Florida | AI Services - Metic.ai"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-massachusetts/page.tsx",
        "old": 'title: "AI Company In Massachusetts | #1 Artificial Intelligence Company In Massachusetts"',
        "new": 'title: "#1 AI Company In Massachusetts | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-mississippi/page.tsx",
        "old": 'title: "AI Company In Mississippi | #1 Artificial Intelligence Company In Mississippi"',
        "new": 'title: "#1 AI Company In Mississippi | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-new-hampshire/page.tsx",
        "old": 'title: "AI Company In New Hampshire | #1 Artificial Intelligence Company In New Hampshire"',
        "new": 'title: "#1 AI Company In New Hampshire | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-north-carolina/page.tsx",
        "old": 'title: "AI Company In North Carolina | #1 Artificial Intelligence Company In North Carolina"',
        "new": 'title: "#1 AI Company In North Carolina | AI Services"'
    },
]

# Add more AI pages with long titles
more_ai_pages = [
    {
        "path": "src/app/artificial-intelligence-ai-services-in-south-carolina/page.tsx",
        "old": 'title: "AI Company In South Carolina | #1 Artificial Intelligence Company In South Carolina"',
        "new": 'title: "#1 AI Company In South Carolina | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-pennsylvania/page.tsx",
        "old": 'title: "AI Company In Pennsylvania | #1 Artificial Intelligence Company In Pennsylvania"',
        "new": 'title: "#1 AI Company In Pennsylvania | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-rhode-island/page.tsx",
        "old": 'title: "AI Company In Rhode Island | #1 Artificial Intelligence Company In Rhode Island"',
        "new": 'title: "#1 AI Company In Rhode Island | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-west-virginia/page.tsx",
        "old": 'title: "AI Company In West Virginia | #1 Artificial Intelligence Company In West Virginia"',
        "new": 'title: "#1 AI Company In West Virginia | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-california/page.tsx",
        "old": 'title: "AI Company In California | #1 Artificial Intelligence Company In California"',
        "new": 'title: "#1 AI Company In California | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-washington/page.tsx",
        "old": 'title: "AI Company In Washington | #1 Artificial Intelligence Company In Washington"',
        "new": 'title: "#1 AI Company In Washington | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-new-jersey/page.tsx",
        "old": 'title: "AI Company In New Jersey | #1 Artificial Intelligence Company In New Jersey"',
        "new": 'title: "#1 AI Company In New Jersey | AI Services"'
    },
    {
        "path": "src/app/artificial-intelligence-ai-services-in-new-mexico/page.tsx",
        "old": 'title: "AI Company In New Mexico | #1 Artificial Intelligence Company In New Mexico"',
        "new": 'title: "#1 AI Company In New Mexico | AI Services"'
    },
]

pages_to_fix.extend(more_ai_pages)

count = 0
for page in pages_to_fix:
    file_path = page["path"]
    
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the title
        if page["old"] in content:
            new_content = content.replace(page["old"], page["new"])
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            count += 1
            print(f"✓ Fixed: {file_path}")
        else:
            print(f"✗ Not found in: {file_path}")
    else:
        print(f"✗ File not found: {file_path}")

print(f"\n✓ Successfully fixed {count} pages")
