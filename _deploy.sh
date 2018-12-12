DEPLOY_PATH="/var/www/html/duxilio.com"

echo "Deploying to $DEPLOY_PATH..."

rsync -av --exclude '.DS_Store' --exclude '.git' --exclude 'node_modules' --exclude '.sass-cache' ./www/ root@kvendrik.com:$DEPLOY_PATH
ssh root@kvendrik.com "chmod -R 755 $DEPLOY_PATH/img"
