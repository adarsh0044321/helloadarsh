$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
Write-Output "Running npm install to restore default dependencies..."
npm install

Write-Output "Installing framer-motion and lucide-react..."
npm install framer-motion lucide-react

Write-Output "Installing Tailwind CSS v4 Vite plugin..."
npm install -D @tailwindcss/vite tailwindcss
