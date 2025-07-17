ssh-keygen -t rsa -C "by15242952083@outlook.com" -f ~/.ssh/id_rsa_ena

ssh-keygen -t rsa -C "by15242952083@outlook.com"-f C:/Users/wb_yu_bian/.ssh/id_rsa_ena

ssh-keygen -t rsa -C "your_email@example.com" -f C:/Users/YourUsername/.ssh/id_rsa_ena

ssh-keygen -t rsa -C "by15242952083@outlook.com" -f C:/Users/wb_yu_bian/.ssh/id_rsa_ena

"C:\Users\wb_yu_bian"

ssh-keygen -t rsa -C "2339600402@qq.com" -f C:/Users/wb_yu_bian/.ssh/id_rsa_enne

id_rsa_enne

Host gitlab
HostName gitlab.com
User git
IdentityFile ~/.ssh/id_rsa_gitlab

    ssh -T github-ena-heleneto

Host github-ena-heleneto
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_ena

Host github-enne
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_enne

echo "# demo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github-enne:enne1234/demo.git
git push -u origin main
